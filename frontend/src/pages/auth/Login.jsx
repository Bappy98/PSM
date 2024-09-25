// pages/auth/Login.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextInput from "../../components/ui/TextInput";
import { useLoginMutation } from "../../store/api/auth/authApiSlice";
import { setUser } from "../../store/api/auth/authSlice";
import { getUser } from "./../../store/api/user/userSlice";
import useRole from "@/hooks/useRole";

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is Required"),
  password: yup.string().required("Password is Required"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userType } = useRole();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const [login, { isLoading, error }] = useLoginMutation();

  const onSubmit = async (data) => {
    try {
      const userData = await login(data).unwrap();
      dispatch(setUser({
        accessToken: userData?.token,
        user_id: userData?._id,
      }));
      dispatch(getUser({ user_id: userData._id, userType: userData.userType }));
      localStorage.setItem("auth", JSON.stringify({
        accessToken: userData?.token,
        user_id: userData._id,
      }));
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    if (userType === "superadmin") {
      navigate("/dashboard");
    } else if (userType === "branch") {
      navigate("/branch");
    }
  }, [navigate, userType]);

  return (
    <div className="common-home-bac mt-[80px]">
      <div className="flex justify-center items-center h-screen -top-24">
        <div className="bg-blue-700 p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl text-white font-bold text-center mb-4">
            PSM Login
          </h2>
          <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <div className="">
                <TextInput
                  name="email"
                  label="email"
                  type="text"
                  defaultValue={"superadmin@gmail.com"}
                  className="w-full px-6 rounded"
                  placeholder="Enter your email"
                  register={register}
                  error={errors.email}
                />
              </div>
              <div>
                <TextInput
                  name="password"
                  label="password"
                  type="password"
                  className="w-full px-6 rounded"
                  defaultValue="test123"
                  placeholder="Enter your password"
                  register={register}
                  error={errors.password}
                  autoComplete="current-password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white rounded-md mt-4 hover:text-blue-900 py-2 hover:bg-blue-50 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
