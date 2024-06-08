import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
//import useAuthCheck from "./hooks/useAuthCheck";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
