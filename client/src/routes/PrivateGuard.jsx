import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getUserData } from "../features/user/userSlice";

const PrivateGard = () => {
  const { user } = useSelector(getUserData);

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateGard;
