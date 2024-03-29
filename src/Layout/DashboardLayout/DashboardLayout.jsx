import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faListCheck,
  faSquarePlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-base-content">
            {/* Sidebar content here */}
            <li className="my-2 font-bold ">
              <div>
                <FontAwesomeIcon
                  className="h-5"
                  beat
                  icon={faChartLine}
                ></FontAwesomeIcon>
                <Link to={"/dashboard"}>My Bookings</Link>
              </div>
            </li>
            <li className="my-2 font-bold">
              {isAdmin && (
                <div>
                  <FontAwesomeIcon
                    className="h-5"
                    beat
                    icon={faUsers}
                  ></FontAwesomeIcon>
                  <Link to={"/dashboard/allUsers"}>All Users</Link>{" "}
                </div>
              )}
            </li>
            <li className="my-2 font-bold">
              {isAdmin && (
                <div>
                  <FontAwesomeIcon
                    className="h-5"
                    beat
                    icon={faSquarePlus}
                  ></FontAwesomeIcon>

                  <Link to={"/dashboard/addOffer"}>Add Offer</Link>
                </div>
              )}
            </li>
            <li className="my-2 font-bold">
              {isAdmin && (
                <div>
                  <FontAwesomeIcon
                    className="h-5"
                    beat
                    icon={faListCheck}
                  ></FontAwesomeIcon>

                  <Link to={"/offer/manageOffer"}>Manage Offer</Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
