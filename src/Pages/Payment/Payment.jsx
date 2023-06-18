import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useNavigation, useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import Spinner from "../Shared/Spinner/Spinner";

const Payment = () => {
  const [data, setData] = useState({});
  const navigation = useNavigation()

  if(navigation.state === 'loading'){
    return <Spinner></Spinner>
  }

  const { id } = useParams();

  const stripePromise = loadStripe(import.meta.env.VITE_stripe_key);
  console.log("stripe", stripePromise);

  useEffect(() => {
    fetch(`http://localhost:5000/dashboard/payment/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("object", data);
        setData(data);
      });
  }, []);

  return (
    <div className="m-10">
      <p className="text-3xl my-5">Payment</p>
      <div className="text-xl my-5">
        <p>
          Hello{" "}
          <strong>{data.customerName ? data.customerName : "Unknown"}</strong>
        </p>
        <p>
          You choose <strong>{data.flightClass}.</strong>
        </p>
        <p>
          Your flight date is <strong>{data.flightDate}</strong> and time is{" "}
          <strong>{data.slot}.</strong>
        </p>
        <p>
          Total cost for the flight is <strong>${data.price}.</strong>
        </p>
        <p>
          The Phone Number you provided <strong>{data.phoneNumber}.</strong>
        </p>
        <p>
          You Provided an Email which is <strong>{data.customerEmail}</strong>.
          Please be careful About Your Email. Ensure that the Email is correct.
        </p>
        <p>Having a good journey with us!!!</p>
        <p>Thank You {data.customerName ? data.customerName : "Unknown"}.</p>

      <div className="w-1/2 my-10">
      <Elements stripe={stripePromise}>
          <CheckoutForm info= {data}  />
        </Elements>
      </div>
      </div>
    </div>
  );
};

export default Payment;
