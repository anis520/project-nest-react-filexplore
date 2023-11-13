import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../components/pages/Home";

// create browser router

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

/// export  router
export default router;
