import React from "react";
import Header from "../website/Header";
import { Outlet } from "react-router-dom";
import Fotter from "../website/Fotter";
import { useEffect } from "react";

const WebRootLayout = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-50 via-white to-indigo-50">
      <Header />
      <Outlet />
      <Fotter />
    </div>
  );
};

export default WebRootLayout;
