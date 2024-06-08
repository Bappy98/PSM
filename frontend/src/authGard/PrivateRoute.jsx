import { selectCurrentToken } from "./../store/api/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const token = useSelector(selectCurrentToken);

  const location = useLocation();
  return token ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
