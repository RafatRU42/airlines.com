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
    ],
  },
]);
