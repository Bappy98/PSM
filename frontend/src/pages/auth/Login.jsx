import React from "react";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../components/ui/TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLoginMutation } from "../../store/api/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/api/auth/authSlice";
import { getUser } from "./../../store/api/user/userSlice";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();
const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const [login, { isLoading, data, error }] = useLoginMutation();
  const onSubmit = async (data) => {
    try {
      const userData = await login(data).unwrap();
      //console.log(userData);
      dispatch(
        setUser({
          accessToken: userData?.token,
          user_id: userData?._id,
        })
      );
      dispatch(getUser({ user_id: userData?._id }));
      localStorage.setItem(
        "auth",
        JSON.stringify({
          accessToken: userData?.token,
          user_id: userData?._id,
        })
      );
      navigate("/dashboard");
    } catch (error) {}
  };

  return (
    <div className="common-home-bac mt-[80px] ">
      <div className="flex justify-center items-center h-screen -top-24 ">
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
                  //className="w-[15rem]"
                  autoComplete="current-password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white rounded-md mt-4 hover:text-blue-900 py-2 hover:bg-blue-50 transition duration-300"
              isLoading={isLoading}
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
