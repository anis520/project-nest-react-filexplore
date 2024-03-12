import { createBrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home";
import LandingPage from "../components/pages/LandingPage";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import { privateRoute } from "./PrivateRoute";
import { publicRoute } from "./PublicRoute";
import WebRootLayout from "../components/Layout/WebRootLayout";
import Features from "../components/website/Features";
import Pricing from "../components/website/Pricing";
import Contact from "../components/website/Contact";

// create browser router

const router = createBrowserRouter([
  ...privateRoute,
  {
    element: <WebRootLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/features", element: <Features /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  ...publicRoute,
]);

/// export  router
export default router;
