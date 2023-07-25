import { useState } from "react";
import OfferCard from "./OfferCard";
import {  JackInTheBox, Zoom } from "react-awesome-reveal";
import Spinner from "../Shared/Spinner/Spinner";

const OtherOffers = () => {

    const [offer,setOffer] = useState([])
    const [loading,setLoading] = useState(true)

    fetch('http://localhost:5000/otherOffer')
    .then(res => res.json())
    .then(data => {
        setOffer(data)
        setLoading(false)
    })

    if(loading){
      return <Spinner></Spinner>
    }


    return (
      <div >
          <JackInTheBox>
        <h2 className="text-2xl font-bold my-4 text-center">These Offers For You!!</h2>

          </JackInTheBox>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
           
           <Zoom>
           {
               offer.map(offers=> <OfferCard key={offers._id} offer={offers}></OfferCard>)
           }
           </Zoom>
       </div>
      </div>
    );
};

export default OtherOffers;