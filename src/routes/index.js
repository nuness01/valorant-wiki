import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Weapons from "../pages/Weapons";
import Home from "../pages/Home";
import Agents from "../pages/Agents";
import Maps from "../pages/Maps";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/weapons",
        element: <Weapons />,
      },
      {
        path: "/agents",
        element: <Agents />,
      },
      {
        path: "/maps",
        element: <Maps />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
