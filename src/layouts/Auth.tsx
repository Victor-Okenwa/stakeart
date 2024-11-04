import { StakeArtFullLogo } from "@/assets/logo";
import { Button } from "@/components/ui/button";
import { LogInIcon, UserCircle } from "lucide-react";
import { useLocation, Outlet, Link } from "react-router-dom";

const Auth = () => {
  const { pathname } = useLocation();
  const checkPathRootPath = (): boolean => {
    if (pathname === "/auth" || pathname === "/auth/") return true;
    else return false;
  };

  return (
    <main className="flex min-h-screen px-2 w-full">
      {checkPathRootPath() ? (
        <div className="relative w-full my-auto flex flex-col gap-3 items-center">
          <img src={StakeArtFullLogo} alt="" />
          <p className="text-center text-sm">
            Stakeart is a marketplace for real-world NFTs and more. Get to know
            more about us by having an account
          </p>

          <div className="flex flex-col items-center gap-4 mt-5 w-full *:w-full">
            <Button variant={"gold"} asChild>
              <Link to="sign-in" className="flex flex-wrap gap-1.5 font-bold">
                <LogInIcon /> Login in your account
              </Link>
            </Button>
            <Button variant={"purple"} asChild>
              <Link to="sign-up" className="flex gap-1.5 font-bold">
                <UserCircle /> Create an account
              </Link>
            </Button>
          </div>

          <div className="mt-auto bg-purple w-[60%] h-[1.5em] absolute top-[120%] rounded-t-full"></div>
          <div className="mt-auto bg-gold w-[58%] h-[1.25em] absolute top-[121%] rounded-t-full"></div>
        </div>
      ) : (
        <Outlet />
      )}
    </main>
  );
};

export default Auth;
