import BranchRoute from "@/authGard/BranchRoute";
import PrivateRoute from "@/authGard/PrivateRoute";
import PublicRoute from "@/authGard/PublicRoute";
import BranchUserLayout from "@/layouts/branch/BranchUserLayout";
import Layout from "@/layouts/dashboard/Layout";
import UserLayout from "@/layouts/user/UserLayout";
import Dashboard from "@/pages/admin/dashboard/Dashboard";
import Stock from "@/pages/admin/stock";
import Login from "@/pages/auth/Login";
import BranchList from "@/pages/branch/BranchList";
import BranchHome from "@/pages/BranchPages/home";
import MedicineReq from "@/pages/BranchPages/medicineRequest";
import BranchStore from "@/pages/BranchPages/store";
import BranchRegister from "@/pages/branchRegister";
import CompanyCreate from "@/pages/company";
import CompanyList from "@/pages/company/CompanyList";
import BranchCreate from "@/pages/CreateBranch";
import CreateDosages from "@/pages/dosages";
import CreateGeneric from "@/pages/generices";
import Homepage from "@/pages/home/Homepage";
import MedicineCreate from "@/pages/medicine";
import MedicineList from "@/pages/medicine/MedicineList";
import { createBrowserRouter } from "react-router-dom";


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
        path: "/stock-dashboard",
        element: <Stock />,
      },
      {
        path: "/branch-register",
        element: <BranchRegister />,
      },
      {
        path: "/branch-create",
        element: <BranchCreate />,
      },
      {
        path: "/company-create",
        element: <CompanyCreate />,
      },
      {
        path:'/company-list',
        element:<CompanyList/>
      },
      {
        path: "/generics-create",
        element: <CreateGeneric />,
      },
      {
        path: "/dosages-create",
        element: <CreateDosages />,
      },
      {
        path: "/medicine-create",
        element: <MedicineCreate />,
      },
      {
        path:"/medicine-list",
        element:<MedicineList/>
      },
      {
        path: "/branches",
        element: <BranchList />,
      },
    ],
  },
  {
    element: (
      <PrivateRoute>
        <BranchUserLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/branch",
        element: <BranchHome />,
      },
      {
        path:"/branchStore",
        element:<BranchStore/>
      },
      {
        path:'/checkout',
        element:<MedicineReq/>
      }
    ],
  },
]);
