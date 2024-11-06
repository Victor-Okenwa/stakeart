import {
  BadgeDollarSign,
  BarChart2,
  Gavel,
  Gem,
  Timer,
  Waypoints,
} from "lucide-react";
import ClientInfo from "@/components/home/ClientInfo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaBox } from "react-icons/fa6";
import ParticaipatedBids from "@/components/home/ParticaipatedBids";

const Home = () => {
  const gridButtons = [
    {
      label: "stakes",
      icon: BadgeDollarSign,
      href: "/stakes",
    },
    {
      label: "auctions",
      icon: Gavel,
      href: "/auctions",
    },
    {
      label: "collectibles",
      icon: FaBox,
      href: "/collectibles",
    },
    {
      label: "exhibitions",
      icon: Timer,
      href: "/exhibitions",
    },
    {
      label: "shares",
      icon: Waypoints,
      href: "/shares",
    },
    {
      label: "leaderboards",
      icon: BarChart2,
      href: "/leaderboards",
    },
  ];
  return (
    <main className="flex flex-col gap-5">
      <ClientInfo />
      {/* grid grid-cols-3 grid-rows-3 px-4  */}
      <section className="flex flex-wrap *:basis:[33%] *:flex-1 gap-3 px-4">
        {gridButtons.map((item) => (
          <Button
            key={item.label}
            variant={"purple"}
            className="min-h-24 min-w-24 px-5 border-2 border-gold rounded-xl"
            asChild
          >
            <Link
              to={item.href}
              className="flex flex-col items-center gap-1 justify-center capitalize"
            >
              {<item.icon size={50} className="" />}
              <span className="">{item.label}</span>
            </Link>
          </Button>
        ))}
      </section>

      <ParticaipatedBids />
    </main>
  );
};

export default Home;
