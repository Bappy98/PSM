import { selectCurrentToken } from "./../store/api/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PublicRoute({ children }) {
  const token = useSelector(selectCurrentToken);

  const location = useLocation();
  return token ? (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  ) : (
    children
  );
}

export default PublicRoute;
