import DataGrid from "@/components/shared/dataTable/DataGrid";
import { useGetMedicineQuery } from "@/store/api/medicine/medicineApiSlice";
import React from "react";

function MedicineList() {
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
      <DataGrid data={data} column={COLUMN} />
    </div>
  );
}

export default MedicineList;
