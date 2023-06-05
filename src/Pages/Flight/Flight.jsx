import { useState } from "react";
import FlightBanner from "./FlightBanner";
import AvailableFlights from "./AvailableFlights";

const Flight = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showComponent, setShowComponent] = useState(false)

  const handleClick = () =>{
    setShowComponent(true)
  }

    return (
        <div>

            <FlightBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></FlightBanner>

            <div className={`text-center mt-5 ${showComponent && 'hidden'}`}>
            <button className=" w-1/4 btn btn-secondary text-white font-bold mx-auto" onClick={handleClick}>Search Flight</button>

            </div>

            {
                showComponent &&   

            <AvailableFlights selectedDate={selectedDate}></AvailableFlights>

            }

        </div>
    );
};

export default Flight;