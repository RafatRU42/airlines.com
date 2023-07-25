import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const OfferCard = ({offer}) => {
  return (
   
    

     <Zoom>
       <div >
        <div
          key={offer._id}
          className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-3 group"
        >
          <figure className="">
            <img
              className="w-full h-full group-hover:scale-110 duration-300"
              src={offer.image}
              alt="offer"
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
      </div>
     </Zoom>

  );
};

export default OfferCard;
