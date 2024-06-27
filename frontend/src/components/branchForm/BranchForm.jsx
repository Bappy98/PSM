import { useForm } from "react-hook-form";
import TextInput from "../ui/TextInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../ui/Select";
//import { useBranchRegisterMutation } from "../../store/api/auth/authApiSlice";
//import fetchWrapper from "./../../../util/fetchWrapper";
const schema = yup
  .object({
      name: yup.string().required().label("Name"),
      address: yup.string().required().label("Address"),
      phone: yup.string().required().label("Address"),
      
  }).required();
function BranchForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  return (
    <div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
            <input type="file"/>
          <Select
          label="Name"
          defaultValue=""
          options={['faysal']}
          name="userType"
          register={register}
          error={errors.name}
          placeholder="Select Branch name" 
          />
          <TextInput
            label={"Address :"}
            register={register}
            placeholder="address"
            className=""
            type={"text"}
            name="address"
            error={errors.address}
          />
          <TextInput
            label={"Phone"}
            register={register}
            type={"phone"}
            placeholder="Phone Number" className=""
            name="phone"
            error={errors.phone}
          />
         
        </div>
        <button type="submit">Create Company</button>
      </form>
    </div>
  );
}

export default BranchForm;
