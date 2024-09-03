import Topbar from "@/layouts/Topbar";
import { CompHand, MicInBg, StudioPiano } from "@/assets/images";
import AuctionCard from "@/components/AuctionCard";

const Auctions = () => {
    const auctions: Auction[] = [
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
            {
          id: "4",
          avatar: CompHand,
          name: "retarded singer and the three mouse",
          auctioneer: "0xb4791058934bced32891832",
          date: "2024-09-01T01:20:12",
          currentBid: 2791,
          minBid: 2000,
          yourBid: 0,
        },
        {
          id: "5",
          avatar: StudioPiano,
          name: "Moutain Top: tale of biyomi",
          auctioneer: "0xb4791058934bced32891832",
          date: "2024-08-10T10:20:12",
          currentBid: 80179,
          minBid: 2000,
          yourBid: 0,
        },
        {
          id: "6",
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
      <Topbar text="Auctions" />

      <div className="px-2 py-4 bg-secondary flex flex-col gap-2">
        {auctions.length > 0 ? (
          [...auctions, ...auctions, ...auctions].map((auction) => (
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
          ))
        ) : (
          <h3 className="py-16 text-center text-primary/60">No ongoing auction </h3>
        )}
      </div>
    </main>
  );
};

export default Auctions;
