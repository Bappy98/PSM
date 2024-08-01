import { Navigate, useLocation } from "react-router-dom";
import { useMemo } from "react";

import { useSelector } from "react-redux";
import { selectCurrentToken } from "../store/api/auth/authSlice";

function PrivateRoute({ children }) {
  const token = useSelector(selectCurrentToken)

  return token ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}

export default PrivateRoute;
