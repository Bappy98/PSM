import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { StyledEngineProvider } from "@mui/material";

import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyledEngineProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </StyledEngineProvider>
  </React.StrictMode>
);
