import { MicInBg } from "@/assets/images";
import ArtChart from "@/components/ArtChart";
import Plead from "@/components/Plead";
import Topbar from "@/layouts/Topbar";
import { Link } from "react-router-dom";

const Collectible = () => {
  const collectible = {
    id: "1",
    title: "oceans on seas",
    avatar: MicInBg,
    creator: " 0xe568278b327e8890432",
    owner: " 0xe568278b327e8890432",
    medium: "oil on canvas",
    dimension: "36 x 48 inches",
    netWeight: "0.6 pounds",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo dignissimos quidem harum vero error molestiae exercitationem inventore! Sed debitis consectetur, optio deserunt corporis eveniet nisi architecto, aut pariatur adipisci quae eos distinctio et laudantium. Illum quam iste consectetur et! Neque odio dolorum voluptate doloremque suscipit nemo ab laboriosam minus!",
  };

  return (
    <main>
      <Topbar text="Collectible" />

      <div className="px-2">
        <section className="flex flex-col gap-2 items-center mt-6">
          <img src={collectible.avatar} alt="" className="rounded-md size-60" />
          <br />

          <Plead type="collect" />
        </section>

        <section className="flex flex-col gap-2 mt-10">
          <p className="flex gap-2 capitalize">
            <b>Title:</b>
            {collectible.title}
          </p>
          <p className="flex gap-2">
            <b>Creator:</b>
            <Link to="/" className="text-purple underline">
              {collectible.creator}
            </Link>
          </p>
          <p className="flex gap-2">
            <b>Staker:</b>
            <Link to="/" className="text-purple underline">
              {collectible.owner}
            </Link>
          </p>
          <p className="flex gap-2 capitalize">
            <b>Medium:</b>
            {collectible.medium}
          </p>
          <p className="flex gap-2">
            <b>Dimension:</b>
            {collectible.dimension}
          </p>
          <p className="flex gap-2">
            <b>Net weight:</b>
            {collectible.netWeight}
          </p>
          <p className="flex gap-2">
            <b>Description:</b>
            <span className="text-[15px]">{collectible.description}</span>
          </p>
        </section>
      </div>
      <section className="flex flex-col">
        <ArtChart />
      </section>
    </main>
  );
};

export default Collectible;
