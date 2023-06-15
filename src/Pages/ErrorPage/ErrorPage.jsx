import { useRouteError } from "react-router-dom";
import image from '../../assets/image/car/sad.webp'

const ErrorPage = () => {

    const error = useRouteError();

    

    return (
        <div className="mx-auto">
            <div className="w-1/4 mx-auto my-10">
                <img src={image} alt="" />
            </div>
            <div className="text-center font-bold text-2xl">
                <p>Something Went Wrong</p>
                <p>Status Code is {error.status}</p>
                <p>Sorry!!</p>
            </div>
        </div>
    );
};

export default ErrorPage;