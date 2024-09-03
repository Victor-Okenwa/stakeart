import Topbar from "@/layouts/Topbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Countdown from "@/components/Countdown";
import { GuitarHand } from "@/assets/images";
import { TagIcon } from "lucide-react";
import { convertToReadableNumber } from "@/lib/utils";
import PlaceBid from "@/components/auction/PlaceBid";
import AuctionRules from "@/components/auction/AuctionRules";
import { Link } from "react-router-dom";

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

          <section className="flex flex-col gap-2 mt-10">
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
        </TabsContent>
        <TabsContent value="bids" className="px-2"></TabsContent>
      </Tabs>
    </main>
  );
};

export default Auction;
