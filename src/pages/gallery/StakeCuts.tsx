import { GuitarHand } from "@/assets/images";
import Topbar from "@/layouts/Topbar";

const StakeCuts = () => {
  const stakeCuts = [
    {
      id: "7823287",
      avatar: GuitarHand,
      date: "2024-10-13T10:10:10",
    },
  ];
  return (
    <main>
      <Topbar text="Stake Cuts" />

      <section>
        {stakeCuts.length > 0 ? (
          <div className="flex flex-col"></div>
        ) : (
          <div className="flex justify-center items-center min-h-[80vh]">
            <h3 className="text-primary/70 text-center">
              No Stakes in your collection
            </h3>
          </div>
        )}
      </section>
    </main>
  );
};

export default StakeCuts;
