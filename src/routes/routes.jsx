import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/SignUp"


const router = createBrowserRouter([
    {
        path: '/',
        element: <SignUp></SignUp>
    }
])

export default router;