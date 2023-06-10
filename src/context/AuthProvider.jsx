import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,  updateProfile} from 'firebase/auth'
import app from "../firebase/firebase.config";



export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }

    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
        setLoading(true)
    }

    const logOut = () =>{
        return signOut(auth)
        setLoading(true)
    }

    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser,userInfo)
    }



    useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        setLoading(false)
    })

    return () => unSubscribe()

    },[])

    const authInfo = {createUser,login,user,logOut,updateUser,loading}
    return (
       <AuthContext.Provider value={authInfo}>

        {children}

       </AuthContext.Provider>
    );
};

export default AuthProvider;