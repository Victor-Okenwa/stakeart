import Topbar from "@/layouts/Topbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Countdown from "@/components/Countdown";
import { CompHand, GuitarHand } from "@/assets/images";
import { TagIcon, UserCircle } from "lucide-react";
import { cn, convertToReadableNumber } from "@/lib/utils";
import PlaceBid from "@/components/auction/PlaceBid";
import AuctionRules from "@/components/auction/AuctionRules";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ReduceString from "@/components/ReduceString";
import ArtChart from "@/components/ArtChart";

const Auction = () => {
  const auction = {
    id: "132",
    avatar: GuitarHand,
    minBid: 1000,
    topBid: 5200,
    userBid: 4300,
    title: "guitar with gills",
    creator: " 0xb467278b327e8890432",
    auctioneer: " 0xe568278b327e8890432",
    medium: "oil on canvas",
    dimension: "36 x 48 inches",
    netWeight: "0.6 pounds",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo dignissimos quidem harum vero error molestiae exercitationem inventore! Sed debitis consectetur, optio deserunt corporis eveniet nisi architecto, aut pariatur adipisci quae eos distinctio et laudantium. Illum quam iste consectetur et! Neque odio dolorum voluptate doloremque suscipit nemo ab laboriosam minus!",
    date: "2024-10-13T10:10:10",
    numberOfAuctions: 25,
    numberOfOwners: 3,
    bids: [
      {
        id: "13455",
        avatar: CompHand,
        bidder: "0xb467278b327e8890432",
        bidPrice: 1460,
      },
      {
        id: "89",
        bidder: "0xb467278b327e8890432",
        bidPrice: 1365,
      },
      {
        id: "1768924",
        bidder: "0xb467278b327e8890432",
        bidPrice: 2807,
      },
    ],
  };

  const auctionElapsedTime = new Date(auction.date);
  return (
    <main>
      <Topbar text="Auction" />

      <Tabs defaultValue="info" className="w-full">
        <TabsList className="w-full *:flex-grow">
          <TabsTrigger value="info">Info</TabsTrigger>
          <TabsTrigger value="bids">Bids</TabsTrigger>
        </TabsList>

        <TabsContent value="info" className="px-2">
          <time className="text-right font-montserrat text-lg">
            <Countdown startDateTime={auctionElapsedTime} />
          </time>

          <section className="flex flex-col gap-2 items-center mt-6">
            <img src={auction.avatar} alt="" className="rounded-md size-60" />

            <div className="flex flex-col gap-3 justify-center items-center">
              <p className="text-[12px]">
                Minimum Bid:{" "}
                <b>{convertToReadableNumber(auction.minBid, 2)}RWA</b>
              </p>
              <div className="flex gap-3">
                <TagIcon />
                <h3>Top Bid</h3>
              </div>

              <h2 className="text-purple text-lg text-center">
                {convertToReadableNumber(30290, 2)} RWA
              </h2>

              <div className="flex flex-col gap-2 items-center">
                <PlaceBid
                  minBid={auction.minBid}
                  topBid={auction.topBid}
                  userBid={auction.userBid}
                />

                <AuctionRules />
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-2 mt-10 mb-7">
            <p className="flex gap-2 capitalize">
              <b>Title:</b>
              {auction.title}
            </p>
            <p className="flex gap-2">
              <b>Creator:</b>
              <Link to="/" className="text-purple underline">
                {auction.creator}
              </Link>
            </p>
            <p className="flex gap-2">
              <b>Auctioneer:</b>
              <Link to="/" className="text-purple underline">
                {auction.auctioneer}
              </Link>
            </p>
            <p className="flex gap-2 capitalize">
              <b>Medium:</b>
              {auction.medium}
            </p>
            <p className="flex gap-2">
              <b>Dimension:</b>
              {auction.dimension}
            </p>
            <p className="flex gap-2">
              <b>Net weight:</b>
              {auction.netWeight}
            </p>
            <p className="flex gap-2">
              <b>Description:</b>
              <span className="text-[15px]">{auction.description}</span>
            </p>
          </section>

          <ArtChart numberOfAuctions={auction.numberOfAuctions} numberOfOwners={auction.numberOfOwners} />
        </TabsContent>

        <TabsContent value="bids" className="px-2">
          <section
            className={cn({ "flex flex-col gap-3": auction.bids.length > 0 })}
          >
            {auction.bids.length > 0 ? (
              [...auction.bids, ...auction.bids, ...auction.bids].map((bid) => (
                <Card key={bid.id} className="z-0">
                  <CardContent className="flex flex-row justify-between items-center p-0">
                    <CardHeader className="z-0 flex flex-row items-center gap-2 p-2">
                      <Avatar>
                        <AvatarImage src={bid.avatar} />
                        <AvatarFallback>
                          <UserCircle />
                        </AvatarFallback>
                      </Avatar>

                      <CardDescription className="text-[10px]">
                        <ReduceString text={bid.bidder} />
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="p-2 flex items-baseline justify-center gap-px">
                      <span className="text-green-600 text-sm">
                        {bid.bidPrice}
                      </span>{" "}
                      <span className="text-[10px]">RWA</span>
                    </CardFooter>
                  </CardContent>
                </Card>
              ))
            ) : (
              <h3 className="py-16 mt-20 text-center text-primary/60">
                No bids yet, be the first to bid.
              </h3>
            )}
          </section>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Auction;
