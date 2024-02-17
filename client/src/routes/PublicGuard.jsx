import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getUserData } from "../features/user/userSlice";

const PublicGard = () => {
  const { token } = useSelector(getUserData);

  if (!token) {
    return <Outlet />;
  } else {
    return <Navigate to="/app" />;
  }
};

export default PublicGard;
