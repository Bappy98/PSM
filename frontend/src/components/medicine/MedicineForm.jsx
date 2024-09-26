import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../ui/TextInput";
import Select from "../ui/Select";
import Title from "../title/Title";
import FileInput from "../ui/FileInput";
import * as yup from "yup";
import Button from "../Button/Button";
import fetchWrapper from "../../util/fetchWrapper";
import { useGetCompanyQuery } from "../../store/api/company/companyApiSlice";
import Textarea from "../ui/Textarea";

const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    unitPrice: yup.number().required().label("Unit price"),
    type: yup.string().required().label("Type"),
    company: yup.string().required().label("Company"),
    generic: yup.string().required().label("Generic"),
    dosages: yup.string().required().label("Dosages"),
    description: yup.string().required(),
  })
  .required();

function MedicineForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const [base64Logo, setBase64Logo] = useState(null);
  const { data: company, error, loading } = useGetCompanyQuery();
  const [companyOptions, setCompanyOptions] = useState([]);
  console.log(company);
  
  useEffect(() => {
    if (company) {
      setCompanyOptions(company.map((item) => item.name));
    }
  }, [company]);

  //console.log(companyOptions);

  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        image: base64Logo,
      };

      console.log("Form Data:", formData);

      const res = await fetchWrapper.post("/medicine/create", formData);
      //console.log("Response:", res);
      reset()
    
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="max-w-[900px] bg-blue-300">
      <Title>Create Medicine</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-5">
          <FileInput
            label={"image"}
            name="image"
            register={register}
            control={control}
            error={errors.image}
            setBase64Logo={setBase64Logo}
            base64Logo={base64Logo}
            required={true}
          />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mx-5 gap-5">
          <TextInput
            label={"Name"}
            register={register}
            type={"text"}
            name="name"
            className="max-w-96 w-full"
            error={errors.name}
            placeholder="Enter Medicine Name"
          />
          <TextInput
            label={"Unit Price"}
            register={register}
            type={"number"}
            name="unitPrice"
            className="max-w-96 w-full"
            error={errors.unitPrice}
            placeholder="Unit Price"
          />
          <Select
            label={"Company"}
            defaultValue={""}
            options={companyOptions}
            name="company"
            register={register}
            error={errors.company}
            placeholder="Select Company name"
            className="max-w-96 w-full mt-2"
          />
          <TextInput
            label={"Generic"}
            defaultValue={""}
            name="generic"
            register={register}
            error={errors.generic}
            placeholder="Select Generic name"
            className="max-w-96 w-full mt-2"
          />
          <TextInput
            label={"Dosages"}
            defaultValue={""}
            name="dosages"
            register={register}
            error={errors.dosages}
            placeholder="Select Dosages name"
            className="max-w-96 w-full mt-2"
          />
          <Select
            label={"Type"}
            defaultValue={""}
            options={[
              "Tablet",
              "Syrup",
              "Capsules",
              "Drops",
              "Inhalers",
              "Injections",
              "Implants or patches",
            ]}
            name="type"
            register={register}
            error={errors.type}
            placeholder="Select type"
            className="max-w-96 w-full mt-2"
          />
           <Textarea
            label={"Description :"}
            register={register}
            placeholder="description"
            className="max-w-96 mt-2 w-full"
            type={"text"}
            row={"5"}
            name="description"
            error={errors.description}
          />
        </div>
        <Button>Add Medicine</Button>
      </form>
    </div>
  );
}

export default MedicineForm;
