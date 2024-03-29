import { useQuery } from "react-query";
import useAdmin from "../../../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import Spinner from "../../Shared/Spinner/Spinner";
import { Zoom } from "react-awesome-reveal";

const AllUsers = () => {
  // const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  // const [isAdmin] = useAdmin(user.email);
  // console.log('erer isadmin',isAdmin);
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () =>
      fetch(" https://airlines-server.vercel.app/allUsers").then((res) => res.json()),
  });

  console.log("object", data);

if(isLoading){
  return <Spinner></Spinner>
}

  const handleAdmin = (id) => {
    console.log("id", id);
    fetch(` https://airlines-server.vercel.app/users/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("put", data);
        refetch();
      });
  };

  // if(!isAdmin){
  //   return navigate('/login')
  // }

  return (
   <Zoom>
     <div>
    
      
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Delete User</th>
          </tr>
        </thead>

        <tbody>
          {data.map((users) => (
            <tr key={users._id}>
              <th>{users.name}</th>
              <td>{users.email}</td>
              <td>
                <button
                  onClick={() => handleAdmin(users._id)}
                  className={`btn btn-secondary btn-sm text-white ${
                    users?.role && "hidden"
                  }`}
                >
                  Make Admin
                </button>
              </td>
              <td>
                <button className="btn btn-error btn-sm text-white">
                  Delete User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
   </Zoom>
  );
};

export default AllUsers;
