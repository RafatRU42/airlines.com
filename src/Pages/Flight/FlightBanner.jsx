import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const FlightBanner = ({selectedDate,setSelectedDate}) => {

  return (
    <div>
      <div className="md:hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src='https://i.ibb.co/1rxnchN/airplane.jpg' className="max-w-sm rounded-lg shadow-2xl" />
          <div className="md:mr-20">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled = {selectedDate}
            ></DayPicker>
            <p className="text-secondary">
              You selected the Depart Date:{" "}
              <span className="font-bold">{format(selectedDate, "PP")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightBanner;
