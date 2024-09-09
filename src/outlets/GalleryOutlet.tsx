import Navbar from "@/layouts/Navbar";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const GalleryOutlet = () => {
  const { pathname } = useLocation();
  if (pathname === "/gallery" || pathname === "/gallery/") {
    return <Navigate to="/gallery/home" />;
  }

  return (
    <div className="h-full">
      <div className="min-h-[90dvh]">
        <Outlet />
      </div>
      <Navbar type="gallery" />
    </div>
  );
};

export default GalleryOutlet;
