import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home/Home";
import Main from "./Main";
import Login from "../components/Login"
import ProtectedRoutes from "../AuthProvider/ProtectedRoutes";
import SignUp from "../components/SignUp"
import Soon from "../components/Soon";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <ProtectedRoutes><Home></Home></ProtectedRoutes>
            },
            {
                path: '/search',
                element: <Soon></Soon>
            },
            {
                path: '/new-listing',
                element: <Soon/>
            },
            {
                path: '/about',
                element: <Soon/>
            },
            {
                path: '/favorites',
                element: <Soon/>
            },
            {
                path: '/help',
                element: <Soon/>
            },
            {
                path: '/setting',
                element: <Soon/>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/sign-up',
        element: <SignUp></SignUp>
    }
])

export default router;