import { createBrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home";
import RootLayout from "../components/Layout/RootLayout";
import LandingPage from "../components/pages/LandingPage";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

// create browser router

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [{ path: "/app", element: <Home /> }],
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

/// export  router
export default router;
