import { useEffect, useState } from "react";
import {Navigate, Outlet} from "react-router-dom";
export const ProtectedRoute = () => {

    const [isAuthenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        setAuthenticated(localStorage.getItem("isAuthenticated"))
        console.log(localStorage.getItem("isAuthenticated"));
        
    }, [])
    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login" />;
};