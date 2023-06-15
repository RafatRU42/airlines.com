import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner/Spinner";
import { toast } from "react-hot-toast";

const ManageOffer = () => {

    const {data=[], isLoading,refetch} = useQuery({
        queryKey:['manageOffer'],
        queryFn: () => fetch('http://localhost:5000/allOffers/selected')
        .then(res =>res.json())
    })

    if(isLoading) {
        return <Spinner></Spinner>
    }


    const handleDelete = (id,type) =>{
      fetch(`http://localhost:5000/allOffers/selected/${id}`,{
        method:'DELETE',
        headers:{
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log('deleted',data);
        refetch()
        toast(`${type} Deleted Successfully`)
      })
        
    }

    return (
        <div className="m-10 p-6">
            this is manage offer {data.length}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Offer Type</th>
        <th>Offer Title</th>
        <th>Delete Offer</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     

     {
        data.map((offer,i) =>   <tr key={offer._id}>

            <td>{i+1}</td>
        
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-circle w-12 h-12">
                    <img src={offer.image} alt="Offer Image" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{offer.type}</div>
                </div>
              </div>
            </td>
            <td className="font-bold">
              {offer.title}
           
            </td>
           
            <th>
              <button onClick={()=>handleDelete(offer._id,offer.type)} className="btn btn-error btn-xs">Delete</button>
            </th>
          </tr>)
     }
    
     
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default ManageOffer;