import { CompHand, MicInBg, StudioPiano } from "@/assets/images";
import CollectCard from "@/components/CollectCard";
import Topbar from "@/layouts/Topbar";

const Collectibles = () => {
  const collectibles = [
    {
      id: "1",
      avatar: CompHand,
      title: "return to chi",
      owner: "0x63b36732872393b2389",
    },
    {
      id: "2",
      avatar: MicInBg,
      title: "gods of the deep",
      owner: "0x63b36732872393e2389",
    },
    {
      id: "3",
      avatar: StudioPiano,
      title: "web change: the tap of light",
      owner: "0x63b36732872393b2389",
    },
  ];
  return (
    <main>
      <Topbar text="Collectibles" />

      <div className="px-2 py-4 bg-secondary flex flex-col gap-2">
        {collectibles.length > 0 ? (
          [...collectibles, ...collectibles, ...collectibles].map(
            (collectible) => (
              <CollectCard
                key={collectible.id}
                avatar={collectible.avatar}
                id={collectible.id}
                owner={collectible.owner}
                title={collectible.title}
              />
            )
          )
        ) : (
          <h3 className="py-16 text-center text-primary/60">
            No ongoing auction{" "}
          </h3>
        )}
      </div>
    </main>
  );
};

export default Collectibles;
