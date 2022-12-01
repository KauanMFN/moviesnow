import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const App = () => {
    return (
        <div className="">
            <Navbar />
            <Outlet />
        </div>
    );
};
