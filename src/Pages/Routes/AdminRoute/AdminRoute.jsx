import { useContext } from "react";
import useAdmin from "../../../hooks/useAdmin";
import { AuthContext } from "../../../context/AuthProvider";
import Spinner from "../../Shared/Spinner/Spinner";
import { Navigate } from "react-router-dom";

const AdminRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin] = useAdmin(user.email)
    console.log('admin', isAdmin);

    if(loading){
        return <Spinner></Spinner>
    }
    
    if(isAdmin){
        return children;
    }

    // if(!isAdmin){
    //     return <Navigate to="/login" state={{ from: location }} replace></Navigate>

    // }

};

export default AdminRoute;