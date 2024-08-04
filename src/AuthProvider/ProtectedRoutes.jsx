/* eslint-disable react/prop-types */ 
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <span className="loading mx-auto w-full mt-48 loading-spinner text-info"></span>
    }
    if (user) {
        return children
    }

    return <Navigate loading={location.pathname} to='/login'></Navigate>
};

export default ProtectedRoutes;