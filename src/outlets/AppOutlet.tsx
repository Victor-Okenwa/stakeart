import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../layouts/Navbar";

const AppOutlet = () => {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/home" />;
  }

  return (
    <div className="h-full">
      <div className="min-h-[90dvh]">
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
};

export default AppOutlet;
