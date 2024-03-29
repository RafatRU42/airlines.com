import { Link } from "react-router-dom";
import airplane from "../../assets/image/airplane-2.png";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div>
      <div className="md:hero group">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <Fade direction="left">
         <img
            src={airplane}
            className="md:max-w-xl max-w-sm group-hover:scale-110 duration-300"
          />
         </Fade>
          <div>
            <h1 className="text-5xl font-bold">Special Offer Is Going On!</h1>
            <p className="py-6">
              Open to legal residents of 50 United States and the District of
              Columbia (excluding Alaska, Florida, New York, and Rhode Island)
              age 19 or older at time of entry. Void where prohibited. Limit one
              entry per person.
            </p>
            <Link to={"/offer/allOffers"}>
              <button className="btn  btn-primary bg-gradient-to-r from-primary to-secondary text-white">
                Get The Offer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
