import { useState } from "react";
import FlightBanner from "./FlightBanner";
import AvailableFlights from "./AvailableFlights";
import BookingModal from "../BookingModal/BookingModal";
import { Helmet } from "react-helmet";
import Opinion from "../Opinion/Opinion";
import { Zoom } from "react-awesome-reveal";

const Flight = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showComponent, setShowComponent] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const handleClick = () => {
    setShowComponent(true);
    
  };

  return (
    <div>
      <Helmet>
        <title>Airlines.com | Flight</title>
      </Helmet>

      <FlightBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></FlightBanner>

      <div className={`text-center mt-5 ${showComponent && "hidden"}`}>
        <button
          className=" w-1/4 btn btn-secondary text-white font-bold mx-auto"
          onClick={handleClick}
        >
        <Zoom>
        Search Flight
        </Zoom>
        </button>
      </div>

      {showComponent && (
        <AvailableFlights
          setBookingData={setBookingData}
          selectedDate={selectedDate}
        ></AvailableFlights>
      )}

      {bookingData && (
        <BookingModal
          selectedDate={selectedDate}
          bookingData={bookingData}
        ></BookingModal>
      )}

      <Opinion selectedDate={selectedDate}></Opinion>
    </div>
  );
};

export default Flight;
