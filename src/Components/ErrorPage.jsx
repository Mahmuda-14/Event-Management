
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" m-80 ml-[43rem] ">
            <div>
        <h1 className="ml-[25px]">404 Error</h1>
        <h1 className="ml-[20px]">Page Not Found</h1>
       </div>
            <Link to ="/"><button className="btn bg-red-500">Go BAck to home</button></Link>
        </div>
    );
};

export default ErrorPage;