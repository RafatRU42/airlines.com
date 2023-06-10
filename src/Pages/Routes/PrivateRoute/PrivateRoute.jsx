import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading,user} = useContext(AuthContext)
    if(loading){
        return <Spinner></Spinner>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    ;
};

export default PrivateRoute;