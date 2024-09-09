import { Card, CardContent, CardHeader } from "../ui/card";
import { Link } from "react-router-dom";
import {
  BadgeDollarSign,
  BoxIcon,
  EyeIcon,
  GavelIcon,
  InfoIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Countdown from "@/components/Countdown";

const GalleryCard = ({ id, avatar, date, type }: GalleryCardProps) => {
  const links = [
    {
      icon: GavelIcon,
      link: "/gallery/home/auction-asset",
      label: "auction",
    },
    {
      icon: BadgeDollarSign,
      link: "/gallery/home/stake-asset",
      label: "stake",
    },
    {
      icon: BoxIcon,
      link: "/gallery/home/make-collectible",
      label: "collectible",
    },
  ];

  const dateTime = new Date(date ?? "");

  return (
    <Card>
      <CardContent className="p-0 relative">
        <CardHeader className="p-0">
          <img src={avatar} className="w-full h-[15rem] object-cover" alt="" />
        </CardHeader>

        <div className="absolute flex justify-between top-2 bottom-2 right-2 left-2">
          {type !== "gallery" && (
            <div className="flex flex-col h-full">
              <div
                className={cn("rounded-full drop-shadow-xl p-1 h-5 w-5", {
                  "bg-purple": type === "auction",
                  "bg-destructive": type === "stake",
                  "bg-green-500": type === "collectible",
                  "bg-gold": type === "exhibition",
                })}
              ></div>

              <Button
                className="mt-auto p-1 rounded-full bg-primary/60 font-bold text-sm text-gold hover:bg-primary/60 hover:text-gold"
                size={"icon"}
                variant="outline"
              >
                2
              </Button>
            </div>
          )}

          <div className="flex flex-col ml-auto">
            <div className=" ml-auto right-2 rounded-sm flex flex-col bg-secondary h-fit overflow-hidden">
              {type === "gallery" ? (
                <>
                  {links.map((link) => (
                    <Link
                      to={link.link}
                      className="p-1 hover:bg-primary hover:text-secondary"
                    >
                      <link.icon />
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  to="/"
                  className="p-1 hover:bg-primary hover:text-secondary"
                >
                  <EyeIcon />
                </Link>
              )}
              <Link to="" className="p-1 hover:bg-primary hover:text-secondary">
                <InfoIcon />
              </Link>
            </div>

            {type === "auction" ||
              (type === "exhibition" && (
                <time className="text-right font-montserrat mt-auto text-xs">
                  <Countdown startDateTime={dateTime} />
                </time>
              ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
