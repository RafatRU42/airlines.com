import { format } from "date-fns";
import { useEffect, useState } from "react";
import AvailableFlight from "./AvailableFlight";


const AvailableFlights = ({selectedDate,setBookingData}) => {

    const [availableFlight, setAvailableFlight] = useState([])
    console.log('ava',availableFlight);

    useEffect(() =>{
        fetch('AvailableFlight.json')
        .then(res => res.json())
        .then(data => setAvailableFlight(data))

    },[])


   


    return (
        <div className="mt-10">
            <p className="text-center italic text-secondary font-bold text-xl">The following services are available on {format(selectedDate,'PP')}</p>

           <div className="grid text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-3">
           {
              availableFlight.map(data => <AvailableFlight setBookingData={setBookingData}  key={data.id} flightData = {data}></AvailableFlight>)
            }
           </div>           
        </div>
    );
};

export default AvailableFlights;