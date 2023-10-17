import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
    const authToken = useSelector((state) => state.auth.token);
    const location = useLocation();

    return authToken ? (
        children
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
}

export { PrivateRoute };
