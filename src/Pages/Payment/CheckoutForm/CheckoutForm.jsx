import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const CheckoutForm = ({ info }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId,setTransactionId] = useState('')
  const {customerName,customerEmail,price,flightClass,flightDate,slot} = info;
  // const [loading,setLoading] = useState(true)

  const stripe = useStripe();
  const elements = useElements();

  // console.log('price',price);



  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(" https://airlines-server.vercel.app/create-payment-intent", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ info }),
    })
        .then((res) => res.json())
        .then((data) =>{
           setClientSecret(data.clientSecret)
          
          });
}, [info]);




  // if(loading) {
  //   return 'Loading'
  // }

  const handleSubmit = async (event) => {
    event.preventDefault();

 

    if (!stripe || !elements) {
      return
  }

  const card = elements.getElement(CardElement);
  if (card === null) {
      return;
  }

  const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
  });

  if (error) {
      console.log(error);
      setCardError(error.message);
  }
  else {
      setCardError('');
  }
  // setSuccess('');
  // setProcessing(true);
  const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  name: customerName,
                  email: customerEmail
              },
          },
      },
  );

  if (confirmError) {
      setCardError(confirmError.message);
      return;
  }
  if (paymentIntent.status === "succeeded") {
      console.log('card info', card);
      setTransactionId(paymentIntent.id)

      const payment = {
        name:customerName,
        email:customerEmail,
        type: flightClass,
        date: flightDate,
        time:slot,
        transactionId,
      }
    
      fetch(' https://airlines-server.vercel.app/payment',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(payment)
      })
      .then(res => res.json())
      .then(data => {
        console.log('payment',data)
        toast.success('You payment successfully!!')
      })
    

  }




  };

  return (
    <div className="my-10 ">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success text-white my-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>

      <div>
        <p className="my-5 text-red-500">{cardError}</p>
      </div>
    </div>
  );
};

export default CheckoutForm;
