import { Link, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const OfferLayOut = () => {
  // const [offer, setOffer] = useState("");
  // console.log("ddd", offer);

  // fetch("http://localhost:5000/allOffers")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setOffer(data[0].type);
  //   });

  return (
    <div className="flex flex-col">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="mx-auto mt-3">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Link className="group" to={'/offer/carOffers'}>
          <button className="mx-2 btn btn-neutral group-hover:scale-110 duration-300">Car Offers</button>
        </Link>
        <Link className="group" to={'/offer/hotelOffers'}>
          <button className="mx-2 text-white group-hover:scale-110 duration-300 btn btn-primary">Hotel Offers</button>
        </Link>
        <Link className="group" to={'/offer/vacationOffers'}>
          <button className="mx-2 text-white group-hover:scale-110 duration-300 btn btn-secondary">Vacation Offers</button>
        </Link>
        <Link className="group" to={'/offer/sessionalOffers'}>
          <button className="mx-2 text-white group-hover:scale-110 duration-300 btn btn-warning">Sessional Offers</button>
        </Link>
        <Link className="group" to={'/offer/otherOffers'}>
          <button className="mx-2 text-white group-hover:scale-110 duration-300 btn btn-info">Other Offers</button>
        </Link>
      </div>
      </div>
      <div className="m-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default OfferLayOut;
