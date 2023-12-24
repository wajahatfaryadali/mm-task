import Login from "../pages/auth/Login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import { routeConstant } from "./routeConstants";

export const allRoutes = [
    {
        path: routeConstant.login,
        component: <Login />,
        layout: routeConstant.authLayout,
    },
    {
        path: routeConstant.dashboard,
        component: <Dashboard />,
    },
]


