import { isDateAfterType } from "react-day-picker";
import { useQuery } from "react-query";
import FAQ from "../FAQ/FAQ";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import OfferDetails from "./OfferDetails";
import Spinner from "../Shared/Spinner/Spinner";

const AllOffers = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["allOffers"],
    queryFn: () =>
      fetch(" https://airlines-server.vercel.app/allOffers").then((res) => res.json()),
  });

  // fetch(' https://airlines-server.vercel.app/allOffers')
  // .then(res => res.json())
  // .then(data => {
  //     console.log('object,',data);
  // })


  if(isLoading){
    return <Spinner></Spinner>
  }

  return (
<div className="">

    <Helmet>
      <title>Airlines.com | Offers</title>
    </Helmet>

    <h2 className="text-2xl font-bold text-center my-10">These Offers For You!!</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {data.map((offer) => (
        <div key={offer._id} className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-3 group">
        <figure className="">
          <img 
            className="w-full h-full group-hover:scale-110 duration-300"
            src={offer.image}
            alt="Car"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{offer.title}</h2>
          <p>{offer.description.substring(0,100)}...</p>
          <div className="">
           <Link to={`/offer/offerDetails/${offer._id}`}>  <button className="btn btn-primary w-full text-white">See Details</button> </Link>
          </div>
         
        </div>
      </div>
      ))}
    </div>
    <FAQ></FAQ>
</div>
  );
};

export default AllOffers;
