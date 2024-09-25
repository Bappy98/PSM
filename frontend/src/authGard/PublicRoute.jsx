// PublicRoute.js

import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "@/store/api/auth/authSlice";
import useRole from "@/hooks/useRole";

function PublicRoute({ children }) {
  const token = useSelector(selectCurrentToken);
  const {userType} = useRole()
  return token ? <Navigate to="/dashboard" replace /> : children;
}

export default PublicRoute;
