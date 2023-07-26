import { useState } from "react";
import OfferCard from "./OfferCard";
import Spinner from "../Shared/Spinner/Spinner";
import { JackInTheBox } from "react-awesome-reveal";

const VacationOffers = () => {

    const [offer,setOffer] = useState([])
    const [loading,setLoading] = useState(true)

    fetch('https://airlines-server-ckel.vercel.app/vacationOffer')
    .then(res => res.json())
    .then(data =>{
        setOffer(data)
        setLoading(false)
    })

    if(loading){
        return <Spinner></Spinner>
    }

    return (
        <div >
                <JackInTheBox>
            <h2 className="text-2xl text-center font-bold my-3">Vacation Offers For You!!</h2>

                </JackInTheBox>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    offer.map(offers => <OfferCard key={offers._id} offer={offers}></OfferCard>)
                }

            </div>
        </div>
    );
};

export default VacationOffers;