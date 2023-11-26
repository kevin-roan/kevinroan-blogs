import { Outlet } from "react-router-dom";
import { AdminLogin } from "../components";
import { User } from "../App";

const PrivateRoutes = ({ isAdmin }: { isAdmin: User | null }) => {
  return isAdmin ? <Outlet /> : <AdminLogin />;
};

export default PrivateRoutes;
