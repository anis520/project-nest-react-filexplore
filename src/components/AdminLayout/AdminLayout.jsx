import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <ul>
        <li>Users</li>
        <li>Orders</li>
        <li>Products</li>
      </ul>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
