import { GuitarHand } from "@/assets/images";
import Countdown from "@/components/Countdown";
import Topbar from "@/layouts/Topbar";
import { convertToReadableNumber } from "@/lib/utils";
import { Link } from "react-router-dom";

const Exhibition = () => {
  const exhibition = {
    id: "132",
    avatar: GuitarHand,
    minBid: 1000,
    title: "guitar boy",
    creator: " 0xb467278b327e8890432",
    auctioneer: " 0xe568278b327e8890432",
    medium: "oil on canvas",
    dimension: "36 x 48 inches",
    netWeight: "0.031 pounds",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo dignissimos quidem harum vero error molestiae exercitationem inventore! Sed debitis consectetur, optio deserunt corporis eveniet nisi architecto, aut pariatur adipisci quae eos distinctio et laudantium. Illum quam iste consectetur et! Neque odio dolorum voluptate doloremque suscipit nemo ab laboriosam minus!",
    date: "2024-10-13T10:10:10",
    auctions: 25,
  };

  const exhibitionElapsedTime = new Date(exhibition.date);
  return (
    <main>
      <Topbar text="Exhibitions" />

      <section className="px-2">
        <time className="text-right font-montserrat text-lg">
          <Countdown startDateTime={exhibitionElapsedTime} type="exhibition" />
        </time>

        <div className="flex flex-col gap-2 items-center mt-6">
          <img src={exhibition.avatar} alt="" className="rounded-md size-60" />

          <div className="flex flex-col gap-3 justify-center items-center">
            <p className="text-[15px]">
              Minimum Bid:{" "}
              <b>{convertToReadableNumber(exhibition.minBid, 2)}RWA</b>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-10">
          <p className="flex gap-2 capitalize">
            <b>Title:</b>
            {exhibition.title}
          </p>
          <p className="flex gap-2">
            <b>Creator:</b>
            <Link to="/" className="text-purple underline">
              {exhibition.creator}
            </Link>
          </p>
          <p className="flex gap-2">
            <b>Auctioneer:</b>
            <Link to="/" className="text-purple underline">
              {exhibition.auctioneer}
            </Link>
          </p>
          <p className="flex gap-2 capitalize">
            <b>Medium:</b>
            {exhibition.medium}
          </p>
          <p className="flex gap-2">
            <b>Dimension:</b>
            {exhibition.dimension}
          </p>
          <p className="flex gap-2">
            <b>Net weight:</b>
            {exhibition.netWeight}
          </p>
          <p className="flex gap-2">
            <b>Description:</b>
            <span className="text-[15px]">{exhibition.description}</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Exhibition;
