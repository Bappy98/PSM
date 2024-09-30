import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUserType } from "@/store/api/auth/authSlice";



const UserLayout = () => {
const token = useSelector(selectCurrentToken)
const role = useSelector(selectCurrentUserType)
const route = role==='branch'?'branch':'dashboard'

  return (
    <div>
    <Navbar/>
    {token? <Navigate to={`/${route}`} replace/> : <Outlet/>}
  
    </div>
  );
};

export default UserLayout;
