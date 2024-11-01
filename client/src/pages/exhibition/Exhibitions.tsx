import { CompHand, MicInBg, StudioPiano } from "@/assets/images";
import AuctionCard from "@/components/AuctionCard";
import Topbar from "@/layouts/Topbar";

const Exhibitions = () => {
  const exhibitions = [
    {
      id: "1",
      avatar: CompHand,
      name: "retarded singer and the three mouse",
      auctioneer: "0xb4791058934bced32891832",
      date: "2024-09-24T21:00:00",
      minBid: 2000,
    },
    {
      id: "2",
      avatar: StudioPiano,
      name: "culture on canvas",
      auctioneer: "0xb4791058934bced32891832",
      date: "2024-10-01T13:20:12",
      minBid: 2000,
    },
    {
      id: "3",
      avatar: MicInBg,
      name: "high seas",
      auctioneer: "0xb4791058934bced32891832",
      date: "2024-10-20T23:20:12",
      minBid: 1540,
    },
    {
      id: "4",
      avatar: CompHand,
      name: "retarded singer and the three mouse",
      auctioneer: "0xb4791058934bced32891832",
      date: "2024-09-01T01:20:12",
      minBid: 2000,
    },
    {
      id: "5",
      avatar: StudioPiano,
      name: "Mountain Top: tale of biyomi",
      auctioneer: "0xb4791058934bced32891832",
      date: "2024-08-10T10:20:12",
      minBid: 2000,
    },
    {
      id: "6",
      avatar: MicInBg,
      name: "art of love",
      auctioneer: "0xb4791058934bced32891832",
      date: "2024-08-08T10:20:12",
      minBid: 5500,
    },
  ];

  return (
    <main>
      <Topbar text="Exhibitions" />

      <section className="px-2 py-4 bg-secondary flex flex-col gap-2">
        {exhibitions.length > 0 ? (
          [...exhibitions, ...exhibitions, ...exhibitions].map((exhibition) => (
            <AuctionCard
              type="exhibition"
              key={exhibition.id}
              auctioneer={exhibition.auctioneer}
              avatar={exhibition.avatar}
              date={exhibition.date}
              id={exhibition.id}
              minBid={exhibition.minBid}
              name={exhibition.name}
            />
          ))
        ) : (
          <h3 className="py-16 text-center text-primary/60">
            No ongoing auction
          </h3>
        )}
      </section>
    </main>
  );
};

export default Exhibitions;
