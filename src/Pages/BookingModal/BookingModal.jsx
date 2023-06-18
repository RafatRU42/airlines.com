import { format } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { stringify } from "postcss";

const BookingModal = ({ bookingData, selectedDate }) => {
  console.log("modal", bookingData);
  const navigate = useNavigate()

  const {user} = useContext(AuthContext)
  console.log('user',user);

  const {slots,name,price} = bookingData;

  const date = format(selectedDate, "PP");


  const handleSubmit = event =>{
    event.preventDefault()
    const form = event.target;
    const slot = form.slot.value;
    const customerName = form.name.value;
    const email= form.email.value;
    const number = form.number.value


    const bookingInfo = {
      flightDate: date,
      slot,
      customerName: customerName,
      flightClass: name,
      customerEmail:email,
      phoneNumber: number,
      price,
    }

    console.log(bookingInfo);
    fetch('http://localhost:5000/bookings',{
      method:'POST',
      headers:{'content-type': 'application/json'},
      body:JSON.stringify(bookingInfo)
    })
    .then(res => res.json())
    .then(data => {
      if(data.acknowledged){
        toast.success('You Successfully Book A Flight!!')
        navigate('/dashboard')

      }
      else{
        toast.error(data.message)
        navigate('/dashboard')

      }
     
    })
  }



  return (
    <div>

      <dialog id="my_modal_2" className="modal">

        <form onSubmit={handleSubmit} method="dialog" className="modal-box">
      <button htmlFor="my-modal-3" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

          <h3 className="font-bold text-lg text-center text-secondary">
            {name}
          </h3>

          <div className="grid grid-cols-1 gap-4 mt-10">
            <input
              type="text"
              disabled
              placeholder={date}
              className="input input-bordered input-success w-full"
            />
            <select name="slot" className="select select-bordered select-success w-full ">
              {
                slots.map((data,i) =>    
                  
              <option key={i} value={data}>{data}</option>
                  
                  
                  )
              }
            </select>
            <input
              name='name'
              type="text"
              defaultValue={user && user.displayName}
              disabled
              className="input input-bordered input-success w-full"
            />
            <input
              name='email'
              type="email"
              disabled
              defaultValue={user && user.email}
              placeholder="Email Address"
              className="input input-bordered input-success w-full"
            />
            <input
              name='number'
              type="number"
              required
              placeholder="Phone Number"
              className="input input-bordered input-success w-full"
            />
          </div>
          {/* <p className="py-4">{bookingData.slots}</p> */}

          <input
            className="btn btn-secondary w-full mt-5 text-white"
            type="submit"
            value="Submit"
          />
        </form>

      </dialog>

    </div>
  );
};

export default BookingModal;
