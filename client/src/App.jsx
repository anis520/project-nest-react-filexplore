import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import router from "./routes/Route";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "./components/pages/Home";
import { getAllFiles } from "./features/filexplore/FileExploreApiSlice";
import RootLayout from "./components/Layout/RootLayout";
function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getAllFiles());
  }, []);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
