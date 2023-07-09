import { isDateAfterType } from "react-day-picker";
import { useQuery } from "react-query";
import FAQ from "../FAQ/FAQ";
import { Helmet } from "react-helmet";

const AllOffers = () => {
  const { data = [], isLoading } = useQuery({
    queryKey: ["allOffers"],
    queryFn: () =>
      fetch(" https://airlines-server.vercel.app/allOffers").then((res) => res.json()),
  });
  console.log("object", data);

  // fetch(' https://airlines-server.vercel.app/allOffers')
  // .then(res => res.json())
  // .then(data => {
  //     console.log('object,',data);
  // })

  return (
<div className="">

    <Helmet>
      <title>Airlines.com | Offers</title>
    </Helmet>

    <h2 className="text-2xl font-bold text-center my-10">These Offers For You!!</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
      {data.map((offer) => (
        <div key={offer._id} className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-3">
        <figure>
          <img
            src={offer.image}
            alt="Car"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
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
