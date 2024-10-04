
import RequireAuth from "@/components/RequireAuth"
import { ROLES } from "@/data/data"
import BranchUserLayout from "@/layouts/branch/BranchUserLayout"
import Layout from "@/layouts/dashboard/Layout"
import UserLayout from "@/layouts/user/UserLayout"
import Dashboard from "@/pages/admin/dashboard/Dashboard"
import MedicineRequest from "@/pages/admin/medicineReq"
import Stock from "@/pages/admin/stock"
import Users from "@/pages/admin/users"
import Login from "@/pages/auth/Login"
import Register from "@/pages/auth/Register"
import BranchList from "@/pages/branch/BranchList"
import Checkout from "@/pages/BranchPages/checkout"
import BranchHome from "@/pages/BranchPages/home"
import Sell from "@/pages/BranchPages/sell"
import BranchStore from "@/pages/BranchPages/store"
import BranchRegister from "@/pages/branchRegister"
import CashMemo from "@/pages/cashMemo"
import CompanyCreate from "@/pages/company"
import CompanyList from "@/pages/company/CompanyList"
import BranchCreate from "@/pages/CreateBranch"
import Homepage from "@/pages/home/Homepage"
import MedicineCreate from "@/pages/medicine"
import MedicineList from "@/pages/medicine/MedicineList"
import Home from "@/pages/user/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
  return (
   <div className="font-sans">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        <Route path="*" element={<Home />} />
      </Route>
      <Route path='/' element={<BranchUserLayout/>}>
      <Route
        element={
          <RequireAuth allowedRoles={[ROLES.BRANCH]}/>
        }
      />
        <Route path='/branch' element={<BranchHome/>}/>
        <Route path='/branchStore' element={<BranchStore/>}/>
        <Route path='/sell' element={<Sell/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/cash-memo' element={<CashMemo/>}/>
      </Route>
      <Route path='/' element={<Layout/>}>
      <Route
      element={
        <RequireAuth allowedRoles={[ROLES.SUPER_ADMIN]}/>
      }
      />
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/stock-dashboard' element={<Stock/>}/>
      <Route path='/branch-register' element={<BranchRegister/>}/>
      <Route path='/branch-create' element={<BranchCreate/>}/>
      <Route path='/company-create' element={<CompanyCreate/>}/>
      <Route path='/company-list' element={<CompanyList/>}/>
      <Route path='/medicine-create' element={<MedicineCreate/>}/>
      <Route path='/medicine-list' element={<MedicineList/>}/>
      <Route path='/branches' element={<BranchList/>}/>
      <Route path='/medicine-req' element={<MedicineRequest/>}/>
      <Route path='/users' element={<Users/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App