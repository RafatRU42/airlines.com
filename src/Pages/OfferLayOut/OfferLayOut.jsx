import { Link, Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const OfferLayOut = () => {

  

  return (
    <div className="flex flex-col">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div>this is for car,hotel,session offers header</div>
      <div className="">
        
        <Link to={'/'}><button className="mx-2 btn btn-neutral">Neutral</button></Link>
        <Link ><button className="mx-2 btn btn-primary">Button</button></Link>
        <Link ><button className="mx-2 btn btn-secondary">Button</button></Link>
     
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default OfferLayOut;
