import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Flight from "../Flight/Flight";
import SignUp from "../SignUp/SignUp";

export const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[

        {path:'/',element:<Home></Home>},
        {path:'/login',element:<Login></Login>},
        {path:'/flight',element:<Flight></Flight>},
        {path:'/signup',element:<SignUp></SignUp>},

    ]}
])