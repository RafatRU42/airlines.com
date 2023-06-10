import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../context/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;

  const { data = [] } = useQuery({
    queryKey: ["usersBooking", email],
    queryFn: () =>
      fetch(`http://localhost:5000/usersBooking?email=${email}`).then((res) =>
        res.json()
      ),
  });
  console.log("data", data);

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
            </tr>
          </thead>
          <tbody>
            {data.map((user,i) => (
             
                <tr key={user._id}>
                  <th>{user.customerName}</th>
                  <td>{user.flightClass}</td>
                  <td>{user.flightDate}</td>
                  <td>{user.slot}</td>
                </tr>
             
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
