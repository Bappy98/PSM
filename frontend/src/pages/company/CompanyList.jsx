import { useGetCompanyQuery } from "@/store/api/company/companyApiSlice";
import React, { useEffect, useMemo, useState } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { Icon } from "@iconify/react";
import GlobalFilter from "@/pages/company/GlobalFilter";

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

  const columns = useMemo(() => COLUMNS, []);
  const dataMemo = useMemo(() => list, [list]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    setPageSize,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: dataMemo,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const { globalFilter, pageIndex,pageSize } = state;

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table
          {...getTableProps()}
          className="w-full text-sm text-left rtl:text-right text-gray-700"
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className="bg-gray-300"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    scope="col"
                    className="px-6 py-4 cursor-pointer"
                  >
                    {column.render("Header")}
                    {/* Add sort indicators */}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()} className="text-sm py-2 px-6">
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="bg-black-100 flex justify-center p-2">
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <select value={pageSize} onChange={(e)=>setPageSize(Number(e.target.value))}>
          {
            [2,10,25].map(pageSize=>(
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))
          }
        </select>
        <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}> {'<<'} </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="px-4"
        >
          Previous
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="px-4"
        >
          Next
        </button>
        <button onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
      </div>
    </>
  );
}

export default CompanyList;
