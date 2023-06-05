import { format } from "date-fns";
import { useEffect, useState } from "react";
import AvailableFlight from "./AvailableFlight";


const AvailableFlights = ({selectedDate}) => {

    const [availableFlight, setAvailableFlight] = useState([])
    // const [renderComponent, setRenderComponent] = useState(false)

    useEffect(() =>{
        fetch('AvailableFlight.json')
        .then(res => res.json())
        .then(data => setAvailableFlight(data))

        // setTimeout(() => {
        //     setRenderComponent(true)
        // }, 2000);

    },[])
    return (
        <div className="mt-10">
            <p className="text-center italic text-secondary font-bold text-xl">The following services are available on {format(selectedDate,'PP')}</p>

           <div className="grid text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-3">
           {
              availableFlight.map(data => <AvailableFlight key={data.id} flightData = {data}></AvailableFlight>)
            }
           </div>



{/* <div className="collapse bg-base-200">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
    {renderComponent? 'Loading' : 'Click Here To Show Your Flight'}
  </div>
  <div className="collapse-content"> 
  {
            renderComponent? 
            
            
            :      
            'Waiting'
            

           }
  </div> */}
{/* </div> */}

           
        </div>
    );
};

export default AvailableFlights;