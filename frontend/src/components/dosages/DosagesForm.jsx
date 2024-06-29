import { useForm } from "react-hook-form";
import TextInput from "../ui/TextInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
      name: yup.string().required().label("Name"),
     
     
      
  }).required();
function DosagesForm() {
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
        <div className="">
           <input type="file" /> 

          <TextInput
            label={"Name :"}
            register={register}
            placeholder="name"
            className=""
            type={"text"}
            name="name"
            error={errors.name}
          />
        </div>
        <button type="submit">Create Company</button>
      </form>
    </div>
  )
}

export default DosagesForm