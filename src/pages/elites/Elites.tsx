import { CompHand, GuitarHand, StudioPiano } from "@/assets/images";
import EliteCard from "@/components/EliteCard";
import Topbar from "@/layouts/Topbar";

const Elites = () => {
  const elites: Elite[] = [
    {
      id: "1345261",
      avatar: CompHand,
      numberOfAuctions: 3,
      avgPrice: 811500,
    },
    {
      id: "15623-2189",
      avatar: GuitarHand,
      numberOfAuctions: 5,
      avgPrice: 749574,
    },
    {
      id: "1345261",
      avatar: StudioPiano,
      numberOfAuctions: 3,
      avgPrice: 210500,
    },
  ];

  return (
    <main className="bg-primary/10">
      <Topbar text="Elite Arts" />

      <section>
        {elites.length > 0 ? (
          <div className="flex flex-col gap-3">
            {[...elites, ...elites, ...elites].map((elite) => (
              <EliteCard
                avatar={elite.avatar}
                avgPrice={elite.avgPrice}
                id={elite.id}
                numberOfAuctions={elite.numberOfAuctions}
              />
            ))}
          </div>
        ) : (
          <h3 className="text-primary/80 text-center mt-52">No result</h3>
        )}
      </section>
    </main>
  );
};

export default Elites;
