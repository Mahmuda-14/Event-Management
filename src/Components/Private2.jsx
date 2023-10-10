
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";


// eslint-disable-next-line react/prop-types
const Private2 = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
   

    if (loading) {
        return <span className="loading loading-ball loading-lg"></span>
    }

    if (user) {
        return children;
    }

    return <Navigate  to="/login"></Navigate>;
};

export default Private2;