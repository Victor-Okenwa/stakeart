import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../layouts/Navbar";
import { useAppContext } from "@/context/AppContext";

const AppOutlet = () => {
  const { pathname } = useLocation();
  const { isAuth } = useAppContext();

  if (pathname === "/") {
    return <Navigate to={isAuth ? "/home" : "/auth"} />;
  }

  return (
    <>
      {isAuth ? (
        <div className="h-full">
          <div className="min-h-[90dvh]">
            <Outlet />
          </div>
          <Navbar />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default AppOutlet;
