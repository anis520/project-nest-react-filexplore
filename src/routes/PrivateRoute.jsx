import PrivateGard from "./PrivateGard";

import Admin from "../components/pages/Admin";
import AdminLayout from "../components/AdminLayout/AdminLayout";

const privateRouter = [
  {
    element: <PrivateGard />,
    children: [
      {
        element: <AdminLayout />,
        children: [{ path: "/admin", element: <Admin /> }],
      },
    ],
  },
];

// export router
export default privateRouter;
