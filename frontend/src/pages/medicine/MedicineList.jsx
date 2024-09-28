import Button from "@/components/Button/Button";
import DataGrid from "@/components/shared/dataTable/DataGrid";
import { useGetMedicineQuery } from "@/store/api/medicine/medicineApiSlice";
import React, { useEffect, useState } from "react";
//import { set } from "react-hook-form";

function MedicineList() {
  const [medicines,setMedicines] = useState(null)
  const { data } = useGetMedicineQuery();
  
  const COLUMN = [
    {
      Header: "No.",
      accessor: (row, i) => i + 1,
    },
    {
      Header: "Name",
      accessor:'name'
    },
    {
      Header: "Company",
      accessor:'company.name'
    },
    {
      Header: "Dosages",
      accessor:'dosages'
    },
    {
      Header: "Type",
      accessor:'type'
    },
    {
      Header: "Unit Price",
      accessor:'unitPrice'
    },
  ];
  console.log(data);
  

  return (
    <div>
      <Button link={'/medicine-create'}>Create Medicine</Button>
      <DataGrid data={data} column={COLUMN} />
    </div>
  );
}

export default MedicineList;
