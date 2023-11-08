import { createBrowserRouter } from "react-router-dom";
import publicRouter from "./PublicRoute";
import privateRouter from "./PrivateRoute";

// create browser router

const router = createBrowserRouter([...publicRouter, ...privateRouter]);

/// export  router
export default router;
