import { selectCurrentToken } from "./../store/api/auth/authSlice";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import useRole from "../hooks/useRole";
import { useMemo } from "react";

function PublicRoute({ children }) {
  //const token = useSelector(selectCurrentToken);
  const { userType, token, user, isLoading, error } = useRole();
  const isAuthenticated = useMemo(() => {
    return token && user && user.userType === "superadmin";
  }, [token, user]);
  console.log(user);

  if (isLoading) {
    return <div>Loading...</div>; // Replace with your actual loading component
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Replace with your actual error handling component
  }
  const location = useLocation();
  return isAuthenticated ? (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  ) : (
    children
  );
}

export default PublicRoute;
