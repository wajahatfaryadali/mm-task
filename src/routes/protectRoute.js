import * as React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { routeConstant } from "./routeConstants";


const ProtectRoute = ({ children }) => {
    const accessToken = useSelector(state => state.login?.authToken);
    return accessToken ? children : <Navigate to={routeConstant.login} replace />;
};

export default ProtectRoute;
