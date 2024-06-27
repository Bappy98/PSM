import { createBrowserRouter } from "react-router-dom";
import Login from "./../pages/auth/Login";
import Layout from "./../layouts/dashboard/Layout";
import Homepage from "./../pages/home/Homepage";
import UserLayout from "./../layouts/user/UserLayout";
import PrivateRoute from "./../authGard/PrivateRoute";
import PublicRoute from "./../authGard/PublicRoute";
import Dashboard from "./../pages/admin/dashboard/Dashboard";
import BranchRegister from './../pages/branchRegister'
import BranchCreate from "../pages/CreateBranch";

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
        path:'/branch-register',
        element:<BranchRegister/>
      },
      {
        path:'/branch-create',
        element:<BranchCreate/>
      }
    ],
  },
]);
