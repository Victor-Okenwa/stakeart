import { GuitarHand } from "@/assets/images";
import ArtChart from "@/components/ArtChart";
import Topbar from "@/layouts/Topbar";
import { convertToReadableNumber } from "@/lib/utils";
import { Link } from "react-router-dom";

const Elite = () => {
  const elite = {
    id: "132",
    avatar: GuitarHand,
    avgPrice: 851000,
    title: "lord of the strings",
    creator: " 0xb467278b327e8890432",
    medium: "oil on canvas",
    dimension: "36 x 48 inches",
    netWeight: "0.031 pounds",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo dignissimos quidem harum vero error molestiae exercitationem inventore! Sed debitis consectetur, optio deserunt corporis eveniet nisi architecto, aut pariatur adipisci quae eos distinctio et laudantium. Illum quam iste consectetur et! Neque odio dolorum voluptate doloremque suscipit nemo ab laboriosam minus!",
    date: "2024-10-13T10:10:10",
    numberOfAuctions: 25,
    numberOfOwners: 125,
  };
  return (
    <main>
      <Topbar text="Elite" />

      <section className="px-2">
        <div className="flex flex-col gap-2 items-center mt-6">
          <img src={elite.avatar} alt="" className="rounded-md size-60" />

          <div className="flex flex-col gap-2 justify-center items-center mt-3">
            <p className="text-base text-purple">
            Number of Auctions:{" "}
              <b>{convertToReadableNumber(elite.numberOfAuctions)}</b>
            </p>
            <p className="text-base">
              Average Price:{" "}
              <b>{convertToReadableNumber(elite.avgPrice, 2)}RWA</b>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-10 mb-8">
          <p className="flex gap-2 capitalize">
            <b>Title:</b>
            {elite.title}
          </p>
          <p className="flex gap-2">
            <b>Creator:</b>
            <Link to="/" className="text-purple underline">
              {elite.creator}
            </Link>
          </p>
          <p className="flex gap-2 capitalize">
            <b>Medium:</b>
            {elite.medium}
          </p>
          <p className="flex gap-2">
            <b>Dimension:</b>
            {elite.dimension}
          </p>
          <p className="flex gap-2">
            <b>Net weight:</b>
            {elite.netWeight}
          </p>
          <p className="flex gap-2">
            <b>Description:</b>
            <span className="text-[15px]">{elite.description}</span>
          </p>
        </div>

        <ArtChart numberOfAuctions={elite.numberOfAuctions} numberOfOwners={elite.numberOfOwners} />

      </section>
    </main>
  );
};

export default Elite;
