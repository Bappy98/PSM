//import React from 'react'

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllBranch } from "../../store/api/branch/branchSlice"

function BranchList() {
  const dispatch = useDispatch()
  const {branch} = useSelector((state)=> state.branch)
  useEffect(()=>{
    dispatch(getAllBranch())
  },[dispatch])
  console.log(branch);

  return (
    <div>
      {branch.map((item,i)=>(
        <div>{item.phone}</div>
      ))}
    </div>
  )
}

export default BranchList