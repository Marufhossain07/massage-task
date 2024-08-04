import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home/Home";
import Main from "./Main";
import Login from "../components/Login"

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])

export default router;