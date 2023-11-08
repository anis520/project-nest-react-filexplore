import { useEffect } from "react";
import { Navigate, Outlet, redirect } from "react-router-dom";
// import { useState } from "react";
// import { useSelector } from "react-redux";

const PublicGard = () => {
  // const { user } = useSelector((state) => state.auth);

  return <Outlet />;
  // return user ? <Navigate to={"/"} /> : <Outlet />;
};

export default PublicGard;
