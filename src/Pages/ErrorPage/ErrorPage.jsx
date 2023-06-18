import { useNavigate, useRouteError } from "react-router-dom";
import image from '../../assets/image/car/sad.webp'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const ErrorPage = () => {

    const navigate = useNavigate()
    const error = useRouteError();
    const {logOut} = useContext(AuthContext)

    const handleLogOut = () =>{
        logOut()
        .then(result =>{
            navigate('/login')
        })
    }

    return (
        <div className="mx-auto">
            <div className="w-1/4 mx-auto my-10">
                <img src={image} alt="" />
            </div>
            <div className="text-center font-bold text-2xl">
                <p>Something Went Wrong</p>
                <p>Status Code is {error.status? error.status : 'Unknown'}</p>
                <button onClick={handleLogOut} className="btn btn-error my-5 text-white">Log Out</button>
            </div>
        </div>
    );
};

export default ErrorPage;