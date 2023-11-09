import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import ProductFrom from "../components/pages/ProductFrom";
import AdminProductPage from "../components/pages/AdminProductpage";

// create browser router

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <AdminProductPage /> },
      { path: "/add", element: <ProductFrom /> },
      { path: "/update/:id", element: <ProductFrom /> },
    ],
  },
]);

/// export  router
export default router;
