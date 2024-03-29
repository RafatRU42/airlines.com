import { useState } from "react";
import { JackInTheBox, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Spinner from "../Shared/Spinner/Spinner";

const HotelOffers = () => {
  const [hotelOffer, setHotelOffer] = useState([]);
  const [loading, setLoading] = useState(true);

  fetch("https://airlines-server-ckel.vercel.app/hotelOffer")
    .then((res) => res.json())
    .then((data) => {
      setHotelOffer(data);
      setLoading(false);
    });

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <JackInTheBox>
        <h2 className="text-2xl text-center font-bold m-3">
          Hotel Offers For You!!
        </h2>
      </JackInTheBox>
     <Zoom>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {hotelOffer.map((offer) => (
          <div
            key={offer._id}
            className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-3 group"
          >
            <figure className="">
              <img
                className="w-full h-full group-hover:scale-110 duration-300"
                src={offer.image}
                alt="Car"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{offer.title}</h2>
              <p>{offer.description.substring(0, 100)}...</p>
              <div className="">
                <Link to={`/offer/offerDetails/${offer._id}`}>
                  {" "}
                  <button className="btn btn-primary w-full text-white">
                    See Details
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
     </Zoom>
    </div>
  );
};

export default HotelOffers;
