import RequireAuth from '@/components/RequireAuth'
import { ROLES } from '@/data/data'
import BranchUserLayout from '@/layouts/branch/BranchUserLayout'
import Layout from '@/layouts/dashboard/Layout'
import UserLayout from '@/layouts/user/UserLayout'
import Login from '@/pages/auth/Login'
import CompanyList from '@/pages/company/CompanyList'
import React, { lazy } from 'react'
const Homepage = lazy(()=>import('./pages/home/Homepage'))
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Dashboard = lazy(()=>import('./pages/admin/dashboard/Dashboard'))
const MedicineRequest = lazy(()=>import('./pages/admin/medicineReq'))
const Stock = lazy(()=>import('./pages/admin/stock'))
const User = lazy(()=>import('./pages/admin/users'))
const BranchList = lazy(()=>import('./pages/branch/BranchList'))
const Checkout = lazy(()=>import('./pages/BranchPages/checkout'))
const BranchHome = lazy(()=>import('./pages/BranchPages/home'))
const Sell = lazy(()=>import('./pages/BranchPages/sell'))
const BranchStore = lazy(()=>import('./pages/BranchPages/store'))
const BranchRegister = lazy(()=>import('./pages/branchRegister'))
const CashMemo = lazy(()=>import('./pages/cashMemo'))
const CompanyCreate = lazy(()=>import('./pages/company'))
const BranchCreate = lazy(()=>import('./pages/CreateBranch'))
const MedicineCreate = lazy(()=>import('./pages/medicine/'))
const MedicineList = lazy(()=>import('./pages/medicine/MedicineList'))

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="*" element={<Homepage />} />
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
      <Route path='/users' element={<User/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   </>
  )
}

export default App