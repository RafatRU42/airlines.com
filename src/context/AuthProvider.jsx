import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from "../firebase/firebase.config";



export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState()

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }



    useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
    })

    return () => unSubscribe()

    },[])

    const authInfo = {createUser,login,user,logOut}
    return (
       <AuthContext.Provider value={authInfo}>

        {children}

       </AuthContext.Provider>
    );
};

export default AuthProvider;