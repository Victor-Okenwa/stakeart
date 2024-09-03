import { CompHand, MicInBg } from "@/assets/images";
import StakeCard from "@/components/StakeCard";
import Topbar from "@/layouts/Topbar";

const Stakes = () => {
  const stakes = [
    {
      id: "1",
      title: "oceans on seas",
      avatar: MicInBg,
      creator: " 0xe568278b327e8890432",
      staker: " 0xe568278b327e8890432",
      minInterest: "2%",
      maxAllowableDuration: "6 months",
    },
    {
      id: "2",
      title: "oceans on seas",
      avatar: CompHand,
      creator: " 0xe568278b327e8890432",
      staker: " 0xe568278b327e8890432",
      minInterest: "2%",
      maxAllowableDuration: "6 months",
    },
  ];

  return (
    <main>
      <Topbar text="Stakes" />
      <div className="px-2 py-4 bg-secondary flex flex-col gap-2">
        {stakes.length > 0 ? (
          [...stakes, ...stakes, ...stakes].map((stake) => (
            <StakeCard
              key={stake.id}
              avatar={stake.avatar}
              id={stake.id}
              maxAllowableDuration={stake.maxAllowableDuration}
              minInterest={stake.minInterest}
              staker={stake.staker}
              title={stake.title}
            />
          ))
        ) : (
          <h3 className="py-16 text-center text-primary/60">
            No ongoing auction{" "}
          </h3>
        )}
      </div>
    </main>
  );
};

export default Stakes;
