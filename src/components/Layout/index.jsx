import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Home from "../pages/Home";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
