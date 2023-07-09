import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext)

  const handleSignOut= () =>{
      logOut()
      .then(res =>{console.log(res);})
      .catch(err => {console.log(err);})
  }

  const menuItems =

    <>
      <li className="mx-1"><Link to='/'>Home</Link></li>
      <li className="mx-1"><Link to='/flight'>Flight</Link></li>
      <li className="mx-1"><Link to='/offer/allOffers'>Offers</Link></li>
      <li className="mx-1"><Link to='/'>Home</Link></li>
        {
          user?.uid ? 
          
          <>
      <li className="mx-1"><Link to={'/dashboard'} >Dashboard</Link></li>
      <li className="mx-1"><Link onClick={handleSignOut} >Log Out</Link></li>
          
          </>
          
          :

      <li className="mx-1"><Link to='/login'>Login</Link></li>

        }      
    </>

  return (
    <div>
      <div className="navbar bg-base-100 lg:flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

              {menuItems}

            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl text-secondary font-bold">Airlines.com</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-secondary font-semibold">
            {menuItems}
          </ul>
        </div>
        <label htmlFor="dashboard-drawer" title="Dashboard" tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
       
      </div>
    </div>
  );
};

export default Navbar;