import { createBrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home";
import RootLayout from "../components/Layout/RootLayout";
import LandingPage from "../components/pages/LandingPage";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import { privateRoute } from "./PrivateRoute";
import { publicRoute } from "./PublicRoute";

// create browser router

const router = createBrowserRouter([
  ...privateRoute,
  {
    path: "/",
    element: <LandingPage />,
  },
  ...publicRoute,
]);

/// export  router
export default router;
