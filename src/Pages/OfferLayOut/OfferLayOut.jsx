import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const OfferLayOut = () => {
    return (
        <div className="flex flex-col">
            <div className="">
               <Navbar></Navbar>
            </div>
            <div>
                this is for car,hotel,session offers header
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default OfferLayOut;