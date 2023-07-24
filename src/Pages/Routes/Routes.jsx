import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Flight from "../Flight/Flight";
import SignUp from "../SignUp/SignUp";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import AllUsers from "../Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute/AdminRoute";
import AddOffer from "../Dashboard/AddOffer/AddOffer";
import OfferLayOut from "../OfferLayOut/OfferLayOut";
import AllOffers from "../OfferLayOut/AllOffers";
import ManageOffer from "../OfferLayOut/ManageOffer";
import Payment from "../Payment/Payment";
import ErrorPage from "../ErrorPage/ErrorPage";
import OfferDetails from "../OfferLayOut/OfferDetails";
import CarOffers from "../OfferLayOut/CarOffers";
import HotelOffers from "../OfferLayOut/HotelOffers";
import VacationOffers from "../OfferLayOut/VacationOffers";
import OtherOffers from "../OfferLayOut/OtherOffers";
import SessionalOffers from "../OfferLayOut/SessionalOffers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      {
        path: "/flight",
        element: (
          <PrivateRoute>
            <Flight></Flight>
          </PrivateRoute>
        ),
      },
      { path: "/signup", element: <SignUp></SignUp> },

    ],
  },

  //Dashboard Layout =>

  {
    path: "/dashboard",
    errorElement:<ErrorPage></ErrorPage>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      { path: "/dashboard", element: <Dashboard></Dashboard> },
      {path: "/dashboard/payment/:id",element:<Payment></Payment>},

      {
        path: "/dashboard/allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addOffer",
        element: (
          <AdminRoute>
            <AddOffer></AddOffer>
          </AdminRoute>
        ),
      },
    ],
  },



  //Offer Layout =>

  {
    path: "/offer",
    element: <OfferLayOut></OfferLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/offer/allOffers",
        element: <AllOffers></AllOffers>,
      },
      {
        path: "/offer/manageOffer",
        element: (
          <AdminRoute>
            <ManageOffer></ManageOffer>
          </AdminRoute>
        ),
      },
      {
        path:'/offer/offerDetails/:id',
        element:<OfferDetails></OfferDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/offer/${params.id}`)
      },
      {
        path:'/offer/carOffers',
        element:<CarOffers></CarOffers>
      },
      {
        path:'/offer/hotelOffers',
        element:<HotelOffers></HotelOffers>
      },
      {
        path:'/offer/vacationOffers',
        element:<VacationOffers></VacationOffers>
      },
      {
        path:'/offer/otherOffers',
        element:<OtherOffers></OtherOffers>
      },
      {
        path:'/offer/sessionalOffers',
        element:<SessionalOffers></SessionalOffers>
      },
    ],
  },
]);
