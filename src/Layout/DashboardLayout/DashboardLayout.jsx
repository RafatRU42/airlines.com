import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
const DashboardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email)
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
        <Outlet></Outlet>

        
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to={'/dashboard'}>My Bookings</Link>
            </li>
            <li>
                {
                  isAdmin &&  <Link to={'/dashboard/allUsers'}>All Users</Link>

                }
            </li>
            <li>
                {
                  isAdmin &&  <Link to={'/dashboard/addOffer'}>Add Offer</Link>

                }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
