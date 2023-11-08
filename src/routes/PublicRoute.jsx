import PublicGard from "./PublicGard";

import Home from "../components/pages/Home";
import Shop from "../components/pages/Shop";
import Account from "../components/pages/Account";
import Layout from "../components/Layout";

// creat public router
const publicRouter = [
  {
    element: <PublicGard />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/shop", element: <Shop /> },
          { path: "/account", element: <Account /> },
        ],
      },
    ],
  },
];

// export router
export default publicRouter;
