import Topbar from "@/layouts/Topbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LeaderBoardCard from "@/components/LeaderBoardCard";
import { CompHand, GuitarHand } from "@/assets/images";
import { cn } from "@/lib/utils";

const Leaderboards = () => {
  const investors = [
    {
      id: "13455",
      avatar: CompHand,
      address: "0xb467278b327e8890432",
    },
    {
      id: "89",
      address: "0xb467278b327e8890432",
    },
    {
      id: "1768924",
      address: "0xb467278b327e8890432",
    },
  ];
  const owners = [
    {
      id: "13455",
      address: "0xb467278b327e8890432",
    },
    {
      id: "89",
      address: "0xb467278b327e8890432",
    },
    {
      id: "319",
      address: "0xb467278b327e8890432",
    },
    {
      id: "1768924",
      avatar: GuitarHand,
      address: "0xb467278b327e8890432",
    },
  ];
  return (
    <main>
      <Topbar text="Leaderboards" />

      <Tabs defaultValue="investors" className="w-full">
        <TabsList className="w-full *:flex-grow">
          <TabsTrigger value="investors">Top Investors</TabsTrigger>
          <TabsTrigger value="owners">Top Owners</TabsTrigger>
        </TabsList>

        <TabsContent value="investors" className="px-2">
          <section
            className={cn({ "flex flex-col gap-3": investors.length > 0 })}
          >
            {investors.length > 0 ? (
              [...investors, ...investors, ...investors].map(
                (investor, index) => (
                  <LeaderBoardCard
                    index={index}
                    id={investor.id}
                    avatar={investor.avatar}
                    address={investor.address}
                  />
                )
              )
            ) : (
              <h3 className="py-16 mt-20 text-center text-primary/60">
                No result
              </h3>
            )}
          </section>
        </TabsContent>
        <TabsContent value="owners" className="px-2">
          <section className={cn({ "flex flex-col gap-3": owners.length > 0 })}>
            {owners.length > 0 ? (
              [...owners, ...owners, ...owners].map((owner, index) => (
                <LeaderBoardCard
                  index={index}
                  id={owner.id}
                  avatar={owner.avatar}
                  address={owner.address}
                />
              ))
            ) : (
              <h3 className="py-16 mt-20 text-center text-primary/60">
                No result
              </h3>
            )}
          </section>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Leaderboards;
