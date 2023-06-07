import { format } from "date-fns";

const BookingModal = ({ bookingData, selectedDate }) => {
  console.log("modal", bookingData);

  const {slots,id,name} = bookingData;

  const date = format(selectedDate, "PP");


  const handleSubmit = event =>{
    event.preventDefault()
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email= form.email.value;
    const number = form.number.value


    const bookingInfo = {
      flightData: date,
      slot,
      customerName: name,
      customerEmail:email,
      phoneNumber: number,
    }

    console.log(bookingInfo);

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
              required
              placeholder="Your Name"
              className="input input-bordered input-success w-full"
            />
            <input
              name='email'
              type="email"
              required
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
