import { useForm } from "react-hook-form";
import TextInput from "../ui/TextInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//import { useBranchRegisterMutation } from "../../store/api/auth/authApiSlice";
import fetchWrapper from './../../../util/fetchWrapper'
import useToast from "../../hooks/useToast";

const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email id Required"),
    name: yup.string().required().label("Name"),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match!"),
    userType: yup.string().required(),
  })
  .required();
function Register() {
  const {successToast,errorToast} = useToast()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
//const [branch,{isLoading}] = useBranchRegisterMutation()
  const onSubmit = async (data) =>{
    console.log(data);
    try {
      const res =  await fetchWrapper.post('/branch/register',data)
      successToast("successful")
     }
    
    catch (error) {
      errorToast("failed")
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
       <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
       <TextInput
          label={"Name :"}
          register={register}
          type={"text"}
          name="name"
          className=""
          error={errors.name}
          placeholder="Enter Your Name"
        />
         <TextInput
          label={"Email :"}
          register={register}
          placeholder="email"
           className=""
          type={"email"}
          name="email"
          error={errors.email}
        /> 
        <TextInput
          label={"Password :"}
          register={register}
          type={"password"}
          placeholder="password"
           className=""
          name="password"
          error={errors.password}
        />
        <TextInput
          label={"Confirm Password :"}
          register={register}
          type={"password"}
           className=""
          placeholder="password"
          name="confirmPassword"
          error={errors.confirmPassword}
        />
        <TextInput
          label={""}
          className="hidden"
          register={register}
          name="userType"
          defaultValue={"branch"}
        />
       </div>
        <button type="submit">Add new Branch</button>
      </form>
    </div>
  );
}

export default Register;
