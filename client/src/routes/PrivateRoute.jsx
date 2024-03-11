import AppRootLayout from "../components/Layout/AppRootLayout";
import Home from "../components/pages/Home";
import PrivateGard from "./PrivateGuard";

export const privateRoute = [
  {
    element: <PrivateGard />,
    children: [
      {
        element: <AppRootLayout />,
        children: [{ path: "/app", element: <Home /> }],
      },
    ],
  },
];
