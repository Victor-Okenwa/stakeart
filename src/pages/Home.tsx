import { BadgeDollarSign, BarChart2, Gavel, Gem, Timer } from "lucide-react";
import ClientInfo from "../components/home/ClientInfo";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { FaBox } from "react-icons/fa6";
import ActiveBids from "../components/home/ActiveBids";

const Home = () => {
  const gridButtons = [
    {
      label: "stake",
      icon: BadgeDollarSign,
      href: "/stake",
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
      label: "ancticipaion",
      icon: Timer,
      href: "/collectibles",
    },
    {
      label: "elites",
      icon: Gem,
      href: "/collectibles",
    },
    {
      label: "leaderboards",
      icon: BarChart2,
      href: "/collectibles",
    },
  ];
  return (
    <main className="flex flex-col gap-12">
      <ClientInfo />

      <section className="grid grid-cols-3 grid-rows-3 px-4 gap-3">
        {gridButtons.map((item) => (
          <Button
            key={item.label}
            variant={"purple"}
            className="min-h-24 min-w-24 px-5"
            asChild
          >
            <Link
              to={item.href}
              className="flex flex-col items-center gap-1 justify-center capitalize"
            >
              {<item.icon size={50} />}
              <span>{item.label}</span>
            </Link>
          </Button>
        ))}
      </section>

      <ActiveBids />
    </main>
  );
};

export default Home;
