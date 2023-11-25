import { Outlet } from "react-router-dom";
import { AdminLogin } from "../components";

const PrivateRoutes = ({ isAdmin }) => {
  return isAdmin ? <Outlet /> : <AdminLogin />;
};

export default PrivateRoutes;
