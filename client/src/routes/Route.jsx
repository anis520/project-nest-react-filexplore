import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import From from "../components/pages/From";
import Home from "../components/pages/Home";

// create browser router

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/add", element: <From /> },
      { path: "/update/:id", element: <From /> },
    ],
  },
]);

/// export  router
export default router;
