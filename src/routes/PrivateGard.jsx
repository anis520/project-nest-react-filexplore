import { Navigate, Outlet, redirect } from "react-router-dom";

//  import { useState } from "react";
// import { useSelector } from "react-redux";

const PrivateGard = () => {
  // const { user } = useSelector((state) => state.auth);

  // return user ? <Outlet /> : <Navigate to={"/login"} />;
  return <Outlet />;
};

export default PrivateGard;
