import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Main = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between">
            <Sidebar></Sidebar>
            <div className="w-full">
            <Navbar></Navbar>
            <Outlet/>
            </div>
            
        </div>
        </div>
    );
};

export default Main;