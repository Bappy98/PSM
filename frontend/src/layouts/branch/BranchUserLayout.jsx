import { Link, Outlet } from "react-router-dom";
import { branchNav, ProfileNav } from "../../data/data";
import { logo } from "../../assets";
import * as React from "react";
import Profile from "../../components/shared/Profile";
import DropDown from "../../components/ui/Dropdown";
import { Icon } from "@iconify/react/dist/iconify.js";
import { logOut } from "../../store/api/auth/authSlice";
import { useDispatch } from "react-redux";

function BranchUserLayout() {
  const userName = "John Doe"; 
  // Replace with dynamic user name
  const dispatch = useDispatch()
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
      <div className="bg-[#0ca0da]">
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
            <DropDown
              label={
                <div className="flex items-center">
                  <Profile />
                  
                  <span className="block">{userName}</span>
                </div>
              }
              className="ml-4 "
              items={ProfileNav.map((item) => ({
                label: item.label,
                link: item.label === "Logout" ? "/" : item.link,
                onClick: item.label === "Logout" ? handleLogOut : null,
              }))}
              wrapperClass="relative"
              labelClass="text-white bg-blue-500 px-4 py-2 rounded-md cursor-pointer"
              classMenuItems="mt-2 w-[150px] bg-white rounded-md shadow-lg"
              classItem="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default BranchUserLayout;
