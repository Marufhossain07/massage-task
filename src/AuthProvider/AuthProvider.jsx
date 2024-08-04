/* eslint-disable react/prop-types */ 

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const auth = getAuth(app)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider;

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = ()=>{
        return signOut(auth)
     }

     useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])


    const AuthInfo = {
        createUser,
        signIn,
        googleSignIn,
        logOut,
        user,
        loading
    }

    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;