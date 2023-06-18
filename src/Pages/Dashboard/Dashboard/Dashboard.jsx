import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../context/AuthProvider";
import Spinner from "../../Shared/Spinner/Spinner";
import { Link } from "react-router-dom";
import Payment from "../../Payment/Payment";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;

  const { data = [], isLoading } = useQuery({
    queryKey: ["usersBooking", email],
    queryFn: () =>
      fetch(`http://localhost:5000/usersBooking?email=${email}`,{
        headers:{
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      }).then((res) =>
        res.json()
      ),
  });
  console.log("data", data);


  if(isLoading){
    return <Spinner></Spinner>
  }

 

  return (
    <div>
        <h2 className="text-3xl my-5 font-bold">My Bookings</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
             
              <th>Name</th>
              <th>Flight Class</th>
              <th>Flight Date</th>
              <th>Flight Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            { data &&
            
            data?.map((user) => (
             
                <tr key={user._id}>
                  <th>{user.customerName}</th>
                  <td>{user.flightClass}</td>
                  <td>{user.flightDate}</td>
                  <td>{user.slot}</td>
                  <td>
                  {
                    user.price && !user.paid && <Link to={`/dashboard/payment/${user._id}`}><button  className="btn btn-success text-white btn-sm">Pay</button></Link>
                  }

                

                  {
                    user.price && user.paid && <span className="text-primary">Paid</span>
                  }
                  </td>
                  
                </tr>
             
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
