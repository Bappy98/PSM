import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";



const UserLayout = () => {
 

  return (
    <div>
    <Navbar/>
    <Outlet/>
  
    </div>
  );
};

export default UserLayout;