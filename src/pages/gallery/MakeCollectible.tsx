import { CompHand } from "@/assets/images";
import Topbar from "@/layouts/Topbar";

const MakeCollectible = () => {

    const collectible = {
        id: '1',
        avatar: CompHand,
        title: 'world music',
    }

  return (
    <main>
      <Topbar text="Make Collectible" />

          <section className="flex flex-col items-center">
              
          </section>          
    </main>
  );
};

export default MakeCollectible;
