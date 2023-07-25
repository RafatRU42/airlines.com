import { isDateAfterType } from "react-day-picker";
import { useQuery } from "react-query";
import FAQ from "../FAQ/FAQ";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import OfferDetails from "./OfferDetails";
import Spinner from "../Shared/Spinner/Spinner";
import { JackInTheBox, Zoom } from "react-awesome-reveal";
import OfferCard from "./OfferCard";

const AllOffers = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["allOffers"],
    queryFn: () =>
      fetch(" https://airlines-server.vercel.app/allOffers").then((res) =>
        res.json()
      ),
  });

  // fetch(' https://airlines-server.vercel.app/allOffers')
  // .then(res => res.json())
  // .then(data => {
  //     console.log('object,',data);
  // })

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  return (
    <div className="">
      <Helmet>
        <title>Airlines.com | Offers</title>
      </Helmet>

      <JackInTheBox>
        <h2 className="text-2xl font-bold text-center ">
          These Offers For You!!
        </h2>
      </JackInTheBox>

  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.map((offer) => (
          <OfferCard key={offer._id} offer={offer}></OfferCard>
        ))}
      </div>
  

      <FAQ></FAQ>
    </div>
  );
};

export default AllOffers;
