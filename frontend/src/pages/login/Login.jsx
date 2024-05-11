import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import VisibilityIcon from "@mui/icons-material/Visibility";
import HideSourceOutlinedIcon from '@mui/icons-material/HideSourceOutlined';

import { useLoginMutation } from "../../features/auth/authApi";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to track password visibility

  const [login, { data: logindata, isLoading, error: responseError }] =
    useLoginMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (responseError) {
      toast.error("Login information is not correct"); // Display error toaster
    } else if (logindata && logindata.access_token) {
      navigate("/home");
    }
  }, [logindata, responseError, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      username,
      password,
    });
  };

  return (
    <div className="bg-gray-50">
      <div className="grid place-items-center min-h-screen">
        <div className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 shadow-xl bg-white rounded-lg max-h-[650px] overflow-auto">
            <div className="w-full rounded-lg flex justify-center flex-col py-6 p-8 items-center relative bg-[#977a36]">
              <div>
                <img  className="h-28" alt="" />
              </div>
              <div className="py-2 text-white text-xl">
                <h1>pms </h1>
              </div>
            </div>
            <div>
              <h1 className="text-center text-xl"></h1>
            </div>
            <form className="mt-4 space-y-4 p-2 sm:p-4" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px ">
                <div className="mb-3">
                  <label htmlFor="password" className="pl-2 mb-2">
                    Username
                  </label>
                  <input
                    id="email-address"
                    name="username"
                    type="text"
                    autoComplete="email"
                    required
                    className="appearance-none w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="mb-4 pl-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"} // Toggle between text and password type
                      autoComplete="current-password"
                      required
                      className="appearance-none w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute top-1/2 right-3 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                    >
                      {showPassword ? <HideSourceOutlinedIcon/> : <VisibilityIcon/>}
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#977a36] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                  disabled={isLoading}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
