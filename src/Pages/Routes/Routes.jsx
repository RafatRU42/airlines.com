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

export const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[

        {path:'/',element:<Home></Home>},
        {path:'/login',element:<Login></Login>},
        {path:'/flight',element:<PrivateRoute><Flight></Flight></PrivateRoute>},
        {path:'/signup',element:<SignUp></SignUp>},


    ]},

    //Dashboard Layout =>

    {path:'/dashboard',element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,children:[
        {path:'/dashboard',element:<Dashboard></Dashboard>},
        {path:'/dashboard/allUsers',element:<AdminRoute><AllUsers></AllUsers></AdminRoute>},
    ]}

    
])