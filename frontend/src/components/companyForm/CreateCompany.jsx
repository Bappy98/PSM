//import React from 'react'
import * as yup from "yup";
import Title from "../title/Title";
import FileInput from "../ui/FileInput";
import TextInput from "../ui/TextInput";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const schema = yup
  .object()
  .shape({
    name: yup.string().required().label("Name"),
    address: yup.string().required().label("Address"),
    phone: yup.string().required().label("Phone"),
    image: yup.mixed().required("A Image is required"),
  })
  .required();
function CreateCompany() {
  const [base64Logo, setBase64Logo] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) =>{
    const formData = {
      ...data,
      logo: base64Logo,
    };
    console.log(formData);
    
    try {
      const res = await fetchWrapper.post("/company/create", formData);
      reset();
      Navigate('/company-list')
      setBase64Logo(null);
    } catch (error) {
      
    }
  }

  return (
    <div className="max-w-[900px] bg-blue-300 p-5">
      <Title>Create Company</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <FileInput
            label="Logo"
            name="logo"
            register={register}
            control={control}
            error={errors.logo}
            setBase64Logo={setBase64Logo}
            base64Logo={base64Logo}
            id="logo"
            required={true}
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <TextInput
            label="Name"
            register={register}
            error={errors.name}
            className="max-w-96 w-full px-2"
            type="text"
            placeholder="Company name"
          />
          <TextInput
            label={"Address :"}
            register={register}
            placeholder="address"
            type={"text"}
            name="address"
            className="max-w-96 w-full"
            error={errors.address}
          />
          <TextInput
            label={"Phone"}
            register={register}
            type={"phone"}
            placeholder="Phone Number"
            className="max-w-96 w-full"
            name="phone"
            error={errors.phone}
          />
        </div>
        <div className="btnDiv justify-end">
        <button className="button" type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateCompany;
