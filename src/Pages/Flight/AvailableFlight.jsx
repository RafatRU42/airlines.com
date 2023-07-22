import { useEffect } from "react";

const AvailableFlight = ({ selectedDate, flightData, setBookingData }) => {

  useEffect(() =>{
    setBookingData(flightData)
  },[])

  const handleFlight = () => {
    // setBookingData(flightData);
    window.my_modal_2.showModal();
  };

  return (
    <div className="mx-auto group">
      <div className="my-10 group-hover:scale-110 duration-300">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-secondary font-bold text-xl text-center">
              {flightData.name}
            </h2>
            <p>
              {flightData.slots.length > 0
                ? flightData.slots[0]
                : "Try Another Day"}
            </p>

            <p>
              {flightData.slots.length && flightData.slots.length } {flightData.slots.length > 1 ?'Spaces ':'Space '}
              Abailable
            </p>
            <p>${flightData.price}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-secondary bg-gradient-to-r from-primary to-secondary w-full text-white font-bold"
                onClick={handleFlight}
                disabled= {flightData.slots.length === 0}
              >
                Book This Flight
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableFlight;
