import { useQuery } from "react-query";

const AllUsers = () => {


    const {data=[],isLoading} = useQuery({
        queryKey:['allUsers'],
        queryFn:() =>fetch('http://localhost:5000/allUsers')
        .then(res=> res.json())
       
    })
    console.log('daafafa',data);

    // fetch('http://localhost:5000/allUsers')
    // .then(res => res.json())
    // .then(data => {
    //     console.log('users data', data);
    // })

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">

    <thead>
      <tr>
        
        <th>Name</th>
        <th>Email</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
      </tr>
    </thead>

    <tbody>

      {
        data.map(users => 
            <tr key={users._id}>
            <th>{users.name}</th>
            <td>{users.email}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
            )
      }
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;