import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import Login from '../pages/login/Login'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Login/>,
      },
      {
        path: '/home',
        element: <Home/>,
      },
     
      
    
      
    ]
  }
]);
