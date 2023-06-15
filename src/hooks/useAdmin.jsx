import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const useAdmin = email =>{

    const [isAdmin,setIsAdmin] = useState(false);
    


    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/admin/${email}`)
            .then(res => res.json())
            .then(data =>{
                console.log('admin',data);
                setIsAdmin(data.isAdmin)
            })
        }
    },[email])

    return [isAdmin]
}

export default useAdmin;