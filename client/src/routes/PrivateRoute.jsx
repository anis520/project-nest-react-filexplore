import RootLayout from "../components/Layout/RootLayout";
import Home from "../components/pages/Home";
import PrivateGard from "./PrivateGuard";

export const privateRoute = [
  {
    element: <PrivateGard />,
    children: [
      {
        element: <RootLayout />,
        children: [{ path: "/app", element: <Home /> }],
      },
    ],
  },
];
