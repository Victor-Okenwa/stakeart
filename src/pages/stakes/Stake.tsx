import { MicInBg } from "@/assets/images";
import Plead from "@/components/Plead";
import TooltipInfo from "@/components/TooltipInfo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Topbar from "@/layouts/Topbar";
import { Link } from "react-router-dom";

const Stake = () => {
  const stake = {
    id: "1",
    title: "oceans on seas",
    avatar: MicInBg,
    creator: " 0xe568278b327e8890432",
    staker: " 0xe568278b327e8890432",
    interest: "2%",
    minAmount: 2000,
    duration: "60 days",
    medium: "oil on canvas",
    dimension: "36 x 48 inches",
    netWeight: "0.6 pounds",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo dignissimos quidem harum vero error molestiae exercitationem inventore! Sed debitis consectetur, optio deserunt corporis eveniet nisi architecto, aut pariatur adipisci quae eos distinctio et laudantium. Illum quam iste consectetur et! Neque odio dolorum voluptate doloremque suscipit nemo ab laboriosam minus!",
  };
  return (
    <main>
      <Topbar text="Stake" />

      <div className="px-2">
        <section className="flex flex-col gap-2 items-center mt-6">
          <img src={stake.avatar} alt="" className="rounded-md size-60" />

          <div className="flex flex-col gap-px justify-center items-center">
            <div className="flex gap-3 items-center flex-wrap">
              <h3 className="flex gap-1.5">
                Interest:
                <span className="text-green-500 font-bold">
                  {stake.interest}
                </span>
              </h3>
              <TooltipInfo
                content={`This is the interest (amount) you would earn from the stake if chosen bid by you exceeds the minimum amount + ${stake.interest}. The interest is not fixed but rather negotiable.`}
              />
            </div>

            <div className="flex gap-3 items-center flex-wrap">
              <h3 className="flex gap-1.5">
                Minimum Amount:
                <span className="text-purple font-bold">
                  {stake.minAmount}RWA
                </span>
              </h3>
              <TooltipInfo
                content={`This is the minimum amount the owner is willing to take off auction. It is advisable to place this as your minimum bid.`}
              />
            </div>

            <div className="flex gap-3 items-center flex-wrap">
              <h3 className="flex gap-1.5">
                Plausible Duration:
                <span className="text-purple font-bold">{stake.duration}</span>
              </h3>
              <TooltipInfo
                content={`This is the amount of time for shared ownership. After ${stake.duration} you would be relinquished the rights to auction this art.`}
              />
            </div>

            <h2 className="text-purple text-lg text-center"></h2>
          </div>

          <Plead
            type="stake"
            duration={stake.duration}
            interest={stake.interest}
            minAmount={stake.minAmount}
          />
        </section>

        <section className="flex flex-col gap-2 mt-10">
          <p className="flex gap-2 capitalize">
            <b>Title:</b>
            {stake.title}
          </p>
          <p className="flex gap-2">
            <b>Creator:</b>
            <Link to="/" className="text-purple underline">
              {stake.creator}
            </Link>
          </p>
          <p className="flex gap-2">
            <b>Staker:</b>
            <Link to="/" className="text-purple underline">
              {stake.staker}
            </Link>
          </p>
          <p className="flex gap-2 capitalize">
            <b>Medium:</b>
            {stake.medium}
          </p>
          <p className="flex gap-2">
            <b>Dimension:</b>
            {stake.dimension}
          </p>
          <p className="flex gap-2">
            <b>Net weight:</b>
            {stake.netWeight}
          </p>
          <p className="flex gap-2">
            <b>Description:</b>
            <span className="text-[15px]">{stake.description}</span>
          </p>
        </section>
      </div>
    </main>
  );
};

export default Stake;
