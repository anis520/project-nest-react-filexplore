import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import router from "./routes/Route";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllUser } from "./features/todo/todoapiSlice";
function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
