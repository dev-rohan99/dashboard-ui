import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateGard: React.FC = () => {

    const user = true;

    return user ? <Outlet/> : <Navigate to={"login"}/>;
    
}

export default PrivateGard;
