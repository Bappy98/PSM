import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Dashboard';

import UserLayout from '../user/UserLayout/UserLayout';
import Dashboard from '../user/pages/Home';
import Contact from '../user/pages/Contact';
import Login from '../user/pages/Login';
import Create from '../pages/Company/Create';

export const router = createBrowserRouter([
  {
    element: <UserLayout />, // UserLayout as the parent element
    children: [
      {
        path: '/',
        element: <Dashboard /> // Dashboard component for the /dashboard route
      },
      
      {
        path: '/contact',
        element: <Contact /> // Home component for the /home route
      },
      {
        path: '/login',
        element: <Login /> // Home component for the /home route
      }
    ]
  },
  {
    element: <Layout />, // Layout as the parent element
    children: [
     
      {
        path: '/dashboard',
        element: <Home /> // Home component for the /home route
      },
      {
        path: '/company/create',
        element: <Create/> // Home component for the /home route
      },
      
    ]
  }
]);
