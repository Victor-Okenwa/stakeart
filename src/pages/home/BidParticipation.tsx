import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Topbar from "@/layouts/Topbar";
import AuctionCard from "@/components/AuctionCard";
import { CompHand, MicInBg, StudioPiano } from "@/assets/images";
const BidParticipation = () => {
  const active: Auction[] = [
    {
      id: "1",
      avatar: CompHand,
      name: "retarded singer and the three mouse",
      auctioneer: "0xb4791058934bced32891832",
      date: "2024-09-24T21:00:00",
      currentBid: 2791,
      minBid: 2000,
      yourBid: 0,
    },
    {
      id: "2",
      avatar: StudioPiano,
      name: "culture on canvas",
      auctioneer: "0xb4791058934bced32891832",
      date: "2024-10-01T13:20:12",
      currentBid: 80179,
      minBid: 2000,
      yourBid: 8017,
    },
    {
      id: "3",
      avatar: MicInBg,
      name: "high seas",
      auctioneer: "0xb4791058934bced32891832",
      date: "2024-10-20T23:20:12",
      currentBid: 80179,
      minBid: 1540,
      yourBid: 3500,
    },
  ];
  const closed: Auction[] = [
    {
      id: "1",
      avatar: CompHand,
      name: "retarded singer and the three mouse",
      auctioneer: "0xb4791058934bced32891832",
      date: "2024-09-01T01:20:12",
      currentBid: 2791,
      minBid: 2000,
      yourBid: 0,
    },
    {
      id: "2",
      avatar: StudioPiano,
      name: "Moutain Top: tale of biyomi",
      auctioneer: "0xb4791058934bced32891832",
      date: "2024-08-10T10:20:12",
      currentBid: 80179,
      minBid: 2000,
      yourBid: 0,
    },
    {
      id: "3",
      avatar: MicInBg,
      name: "art of love",
      auctioneer: "0xb4791058934bced32891832",
      date: "2024-08-08T10:20:12",
      currentBid: 80179,
      minBid: 2000,
      yourBid: 8017,
    },
  ];
  return (
    <main>
      <Topbar text="Bid Participation" />

      <Tabs defaultValue="active-bid" className="w-full">
        <TabsList className="w-full *:flex-grow">
          <TabsTrigger value="active-bid" className="">
            Active Bid
          </TabsTrigger>
          <TabsTrigger value="closed-bid">Closed Bid</TabsTrigger>
        </TabsList>
        <TabsContent value="active-bid" className="px-2">
          {active.length > 0 ? (
            <div className="flex flex-col gap-3">
              {[...active, ...active, ...active].map((auction) => (
                <AuctionCard
                  key={auction.id}
                  auctioneer={auction.auctioneer}
                  avatar={auction.avatar}
                  currentBid={auction.currentBid}
                  date={auction.date}
                  id={auction.id}
                  minBid={auction.minBid}
                  name={auction.name}
                  yourBid={auction.yourBid}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-[20rem]">
              <h3 className="text-primary/80">No result</h3>
            </div>
          )}
        </TabsContent>
        <TabsContent value="closed-bid" className="px-2">
          {closed.length > 0 ? (
            <div className="flex flex-col gap-3">
              {[...closed, ...closed, ...closed].map((auction) => (
                <AuctionCard
                  key={auction.id}
                  auctioneer={auction.auctioneer}
                  avatar={auction.avatar}
                  currentBid={auction.currentBid}
                  date={auction.date}
                  id={auction.id}
                  minBid={auction.minBid}
                  name={auction.name}
                  yourBid={auction.yourBid}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-[20rem]">
              <h3 className="text-primary/80">No result</h3>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default BidParticipation;
