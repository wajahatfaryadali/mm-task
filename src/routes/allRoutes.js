import CreateNewPassword from "../pages/auth/CreateNewPassword/CreateNewPassword";
import ForgotPassword from "../pages/auth/ForgotPassword/ForgotPassword";
import Login from "../pages/auth/Login/Login";
import Otp from "../pages/auth/Otp/Otp";
import Register from "../pages/auth/Register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import { routeConstant } from "./routeConstants";

export const allRoutes = [
    {
        path: routeConstant.login,
        component: <Login />,
        layout: routeConstant.authLayout,
    },
    {
        path: routeConstant.register,
        component: <Register />,
        layout: routeConstant.authLayout,
    },
    {
        path: routeConstant.forgotPassword,
        component: <ForgotPassword />,
        layout: routeConstant.authLayout,
    },
    {
        path: routeConstant.verifyOtp,
        component: <Otp />,
        layout: routeConstant.authLayout,
    },
    {
        path: routeConstant.createNewPassword,
        component: <CreateNewPassword />,
        layout: routeConstant.authLayout,
    },
    {
        path: routeConstant.dashboard,
        component: <Dashboard />,
    },
]


