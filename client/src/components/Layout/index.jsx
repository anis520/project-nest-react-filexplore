import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  let { pathname } = useLocation();

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
