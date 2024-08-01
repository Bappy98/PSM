// import { Navigate, useLocation } from "react-router-dom";
// import { useMemo } from "react";
// import useRole from "../hooks/useRole";

// function BranchRoute({ children }) {
//   const { userType, token, user, isLoading, error } = useRole();
//   const location = useLocation();

//   const isAuthenticated = useMemo(() => {
//     return token && user && user.userType === "branch";
//   }, [token, user]);

//   if (isLoading) {
//     return <div>Loading...</div>; // Replace with your actual loading component
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>; // Replace with your actual error handling component
//   }

//   return isAuthenticated ? (
//     children
//   ) : (
//     <Navigate to="/" state={{ from: location }} replace />
//   );
// }

// export default BranchRoute;
