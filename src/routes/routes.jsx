import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/SignUp"
import Home from "../layouts/Home/Home";
import Main from "./Main";


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
    }
])

export default router;