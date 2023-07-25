import { useState } from "react";
import OfferCard from "./OfferCard";

const OtherOffers = () => {

    const [offer,setOffer] = useState([])

    fetch('http://localhost:5000/otherOffer')
    .then(res => res.json())
    .then(data => {
        setOffer(data)
    })


    return (
      <div >
        <h2 className="text-2xl font-bold my-4 text-center">These Offers For You!!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
           
           {
               offer.map(offers=> <OfferCard key={offers._id} offer={offers}></OfferCard>)
           }
       </div>
      </div>
    );
};

export default OtherOffers;