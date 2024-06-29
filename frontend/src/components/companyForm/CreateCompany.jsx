import { useForm } from "react-hook-form";
import TextInput from "../ui/TextInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "../ui/Select";
//import { useBranchRegisterMutation } from "../../store/api/auth/authApiSlice";
//import fetchWrapper from "./../../../util/fetchWrapper";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button, Grid, Typography, Paper,Box } from "@mui/material";

const schema = yup
  .object({
      name: yup.string().required().label("Name"),
      address: yup.string().required().label("Address"),
      phone: yup.string().required().label("Address"),
      
  }).required();
function CreateCompany() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  return (
    <Paper elevation={3} style={{ padding: 20 }}>
      <Typography variant="h5" className="my-3 text-center" gutterBottom>
        Create Company
      </Typography>

      <form className="mt-9">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="">
          <label className="my-5 font-semibold" htmlFor="">Logo</label>
       < Box item xs={12} className="mt-2">
            <label htmlFor="file-upload">
              <input
                id="file-upload"
                type="file"
                style={{ display: "none" }}
                
              />
              <Button
                variant="outlined"
                component="span"
                startIcon={<CloudUploadIcon />}
              >
                Upload 
              </Button>
            </label>
            
            
          </Box>
          </div>

          <TextInput
          label="Name"
          defaultValue=""
          register={register}
          error={errors.name}
          placeholder="Company name" 
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

      </form>

      <Box className="flex justify-center py-6">
      <Button variant="contained" type="submit">Create Company</Button>

      </Box>
    </Paper>
  );
}

export default CreateCompany;
