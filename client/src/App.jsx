import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import router from "./routes/Route";
import { RouterProvider } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Home from "./components/pages/Home";
import { getAllFiles } from "./features/filexplore/FileExploreApiSlice";
import RootLayout from "./components/Layout/RootLayout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUserData } from "./features/user/userSlice";
import { getMe } from "./features/user/userApiSlice";

function App() {
  const dispatch = useDispatch();
  const { token } = useSelector(getUserData);
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getMe(token));
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
