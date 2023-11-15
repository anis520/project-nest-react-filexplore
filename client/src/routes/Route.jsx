import { createBrowserRouter } from "react-router-dom";

import Home from "../components/pages/Home";
import RootLayout from "../components/Layout/RootLayout";

// create browser router

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

/// export  router
export default router;
