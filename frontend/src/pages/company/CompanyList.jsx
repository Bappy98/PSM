import { useGetCompanyQuery } from "@/store/api/company/companyApiSlice";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/Button/Button";
import DataGrid from "@/components/shared/dataTable/DataGrid";

function CompanyList() {
  const [list, setList] = useState([]);
  const { data } = useGetCompanyQuery();

  useEffect(() => {
    if (data) {
      setList(data);
    }
  }, [data]);

  const COLUMNS = [
    {
      Header: "No.",
      accessor: (row, i) => i + 1, // Counter column
    },
    {
      Header: "Name",
      accessor: "name", // Simple accessor for sorting
    },
    {
      Header: "Address",
      accessor: "address", // Simple accessor for sorting
    },
    {
      Header: "Phone",
      accessor: "phone", // Simple accessor for sorting
    },
    {
      Header: "View",
      Cell: ({ row }) => (
        <button className="text-xl flex justify-center text-center ml-2">
          <Icon icon="heroicons-eye" />
        </button>
      ),
      disableSortBy: true, // Disable sorting for this column
    },
  ];

  

  return (
    <>
    <Button link={'/company-create'}>Create company</Button>
      <DataGrid data={data} column={COLUMNS}/>
    </>
  );
}

export default CompanyList;
