import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppLevelProvider } from "./services/AppLevelContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppLevelProvider>
      <RouterProvider router={router} />
    </AppLevelProvider>
  </React.StrictMode>
);
