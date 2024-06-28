import { useForm } from "react-hook-form";
import TextInput from "../ui/TextInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
      name: yup.string().required().label("Name"),
      details: yup.string().required().label("Details"),
     
      
  }).required();
function GenericsForm() {
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
            

          <TextInput
            label={"Name :"}
            register={register}
            placeholder="name"
            className=""
            type={"text"}
            name="name"
            error={errors.name}
          />
       
          <TextInput
            label={"Details :"}
            register={register}
            placeholder="details"
            className=""
            type={"text"}
            name="details"
            error={errors.details}
          />
       
         
        </div>
        <button type="submit">Create Company</button>
      </form>
    </div>
  )
}

export default GenericsForm