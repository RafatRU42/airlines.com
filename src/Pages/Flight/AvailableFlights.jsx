import { format } from "date-fns";
import { useEffect, useState } from "react";
import AvailableFlight from "./AvailableFlight";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner/Spinner";


const AvailableFlights = ({selectedDate,setBookingData}) => {

    // const [availableFlight, setAvailableFlight] = useState([])

    const date = format(selectedDate,'PP')


  const {data:availableFlight=[],isLoading} = useQuery({
    queryKey:['availableFlight',date],
    queryFn:() => fetch(` https://airlines-server.vercel.app/availableFlight?date=${date}`)
    .then(res =>res.json())

  })

  if(isLoading){
    return <Spinner></Spinner>
  }

   


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