//import React from 'react'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBranch } from "../../store/api/branch/branchSlice"
import DataGrid from "@/components/shared/dataTable/DataGrid"
import Button from "@/components/Button/Button"

function BranchList() {
  const dispatch = useDispatch()
  const {branch} = useSelector((state)=> state.branch)
  useEffect(()=>{
    dispatch(getAllBranch())
  },[dispatch])
  const COLUMN = [
    {
      Header: "No.",
      accessor: (row, i) => i + 1,
    },
    {
      Header:"Branch Name",
      accessor:row => row.user_id?.name
    },
    {
      Header:"Address",
      accessor:row => row.address
    },
    {
      Header:"Phone",
      accessor:row => row.phone
    },
  ]

  return (
    <div>
      <Button link={'/branch-create'}>Add Branch Info</Button>
      <DataGrid data={branch} column={COLUMN}/>
    </div>
  )
}

export default BranchList