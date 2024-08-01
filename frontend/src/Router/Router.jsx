import { createBrowserRouter } from "react-router-dom";
import Login from "./../pages/auth/Login";
import Layout from "./../layouts/dashboard/Layout";
import Homepage from "./../pages/home/Homepage";
import UserLayout from "./../layouts/user/UserLayout";
import PrivateRoute from "./../authGard/PrivateRoute";
//import BranchRouter from './../authGard/BranchRoute'
import PublicRoute from "./../authGard/PublicRoute";
import Dashboard from "./../pages/admin/dashboard/Dashboard";
import BranchRegister from './../pages/branchRegister'
import BranchCreate from "../pages/CreateBranch";
import CompanyCreate from "../pages/company";
import CreateGeneric from "../pages/generices";
import CreateDosages from "../pages/dosages";
import MedicineCreate from "../pages/medicine";
import BranchList from "../pages/branch/BranchList";

export const router = createBrowserRouter([
  {
    element: (
      <PublicRoute>
        <UserLayout />
      </PublicRoute>
    ),
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
   },
  // {
  //   element:(
  //     <BranchRouter>
  //     <Layout/>
  //     </BranchRouter>
  //   ),
  //   children:[
  //     {
  //       path: "/dashboard",
  //       element: <Dashboard />,
  //     },
  //   ]
  // },
  {
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path:'/branch-register',
        element:<BranchRegister/>
      },
      {
        path:'/branch-create',
        element:<BranchCreate/>
      },
      {
        path:'/company-create',
        element:<CompanyCreate/>
      },
      {
        path:'/generics-create',
        element:<CreateGeneric/>
      },
      {
        path:'/dosages-create',
        element:<CreateDosages/>
      },
      {
        path:'/medicine-create',
        element:<MedicineCreate/>
      },
      {
        path:'/branches',
        element:<BranchList/>
      }
    ],
  },
  
]);
