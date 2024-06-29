import React from "react";
import Register from "../../components/branchForm/BranchRegister";


function BranchRegister() {

  return (
    <div className="bg-[#f3f3f3] h-full min-h-screen">
      <div className="text-center font-bold text-3xl">Branch Register</div>
      <div className="">
        <Register/>
      </div>
    </div>
  );
}

export default BranchRegister;
