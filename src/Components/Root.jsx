import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
const Root = () => {
    return (
        <div className="font-display">
        
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;