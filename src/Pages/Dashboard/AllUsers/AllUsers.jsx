import { useQuery } from "react-query";

const AllUsers = () => {


    const {data=[],isLoading,refetch} = useQuery({
        queryKey:['allUsers'],
        queryFn:() =>fetch('http://localhost:5000/allUsers')
        .then(res=> res.json())
       
    })

    console.log('object',data);

    // fetch('http://localhost:5000/allUsers')
    // .then(res => res.json())
    // .then(data => {
    //     console.log('users data', data);
    // })

    const handleAdmin = id =>{
    console.log('id',id);
    fetch(`http://localhost:5000/users/admin/${id}`,{
      method:'PUT'
    })
    .then(res => res.json())
    .then(data => {
      console.log('put',data);
      refetch()
    })
    }

    return (
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

      {
        data.map(users => 
            <tr key={users._id}>
            <th>{users.name}</th>
            <td>{users.email}</td>
            <td><button onClick={()=>handleAdmin(users._id)} className={`btn btn-secondary btn-sm text-white ${users?.role && 'hidden'}`}>Make Admin</button></td>
            <td><button className="btn btn-error btn-sm text-white">Delete User</button></td>
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