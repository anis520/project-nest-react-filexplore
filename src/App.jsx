import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import router from "./routes/Route";
import { RouterProvider } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
