import { Link, Outlet } from "react-router-dom";
import { branchNav, ProfileNav } from "../../data/data";
import { logo } from "../../assets";
import * as React from "react";
import Profile from "../../components/shared/Profile";
import DropDown from "../../components/ui/Dropdown";
import { Icon } from "@iconify/react/dist/iconify.js";
import { logOut, selectCurrentToken, selectCurrentUserType } from "../../store/api/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

function BranchUserLayout() {
  const [open,setOpen] = React.useState(false)
  // Replace with dynamic user name
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.clear();
    dispatch(
      logOut({
        accessToken: null,
        user_id: null,
      })
    );
  };
  return (
    <div>
      <div className="bg-[#7348c2]">
        <div className="container mx-auto flex justify-between h-24 w-full">
          <div className="items-center flex h-full">
            <img src={logo} alt="" className="h-16 w-16" />
          </div>
          <div className="flex">
            {branchNav.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                className="text-2xl flex items-center hover:bg-black-500 my-6 text-white mx-2 rounded-xl px-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="h-full flex items-center justify-center ">
           <div className="flex text-white items-center relative">
           <button className="flex justify-center items-center" onClick={()=>setOpen(!open)}> <Profile/> <div>Faysal</div></button>
           <div className={`absolute bg-black-100  px-4 py-4 text-black-500 rounded-lg top-12 ${open?'block':'hidden'}`}>
            <Link>Profile</Link>
            <button onClick={()=>{
              handleLogOut()
            }}>LogOut</button>
           </div>
           </div>
          </div>
          
          <div>

          </div>
        </div>
      </div>
       <Outlet/>
    </div>
  );
}

export default BranchUserLayout;
