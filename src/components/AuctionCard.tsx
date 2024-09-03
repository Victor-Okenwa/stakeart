import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import { GuitarHand } from "@/assets/images";
import Countdown from "./Countdown";
import ReduceString from "./ReduceString";
import { convertToReadableNumber } from "@/lib/utils";

const AuctionCard = ({
  id,
  avatar,
  name,
  auctioneer,
  date,
  currentBid,
  minBid,
  yourBid,
}: Auction) => {
  const auctionDate = new Date(date);

  return (
    <Link to={"/auctions/" + id}>
      <Card className="p-0">
        <CardContent className="flex p-2 items-center justify-between">
          <CardHeader className="flex flex-row gap-4 p-0">
            <img src={avatar} className="size-10" alt="" />
            <div className="flex flex-col justify-between text-xs">
              <CardTitle className="text-xs capitalize text-[11px]">
                <ReduceString text={name} />
              </CardTitle>
              <CardDescription className="text-xs">
                <ReduceString text={auctioneer} />
              </CardDescription>
            </div>
          </CardHeader>

          <CardFooter className="p-0 flex flex-col h-full basis-[50%] items-end">
            <p className="text-green-500 mb-auto text-xs">
              <Countdown startDateTime={auctionDate} />{" "}
            </p>
            <p className="text-[10px] mt-auto">
              {yourBid > 0 ? (
                <>
                  Your Bid: <b>{convertToReadableNumber(yourBid)} RWA</b>
                </>
              ) : (
                <>
                  Top Bid: <b>{convertToReadableNumber(currentBid)} RWA</b>
                </>
              )}
            </p>
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  );
};

export default AuctionCard;
