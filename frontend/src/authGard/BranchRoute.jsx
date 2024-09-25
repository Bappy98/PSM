// authGard/BranchRoute.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useRole from "@/hooks/useRole";

const BranchRoute = ({ children }) => {
  const { userType } = useRole();
  const location = useLocation();

  if (!userType) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default BranchRoute;
