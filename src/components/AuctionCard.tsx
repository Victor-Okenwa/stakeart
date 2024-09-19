import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import Countdown from "./Countdown";
import ReduceString from "./ReduceString";
import { convertToReadableNumber } from "@/lib/utils";

const AuctionCard = ({
  type = "auction",
  id,
  avatar,
  name,
  auctioneer,
  date,
  currentBid = 0,
  minBid,
  yourBid = 0,
}: AuctionCardProps) => {
  const auctionDate = new Date(date);

  return (
    <Link to={`/${type}s/${id}`}>
      <Card className="p-0">
        <CardContent className="flex p-2 items-center justify-between">
          <CardHeader className="flex flex-row gap-4 p-0">
            <img src={avatar} className="size-10" alt="" />
            <div className="flex flex-col justify-between text-xs">
              <CardTitle className="text-xs capitalize text-[11px]">
                <ReduceString text={name} />
              </CardTitle>
              <CardDescription className="text-xs">
                <ReduceString text={auctioneer} strLength={10} />
              </CardDescription>
            </div>
          </CardHeader>

          <CardFooter className="p-0 flex flex-col h-full basis-[50%] items-end">
            <p className="mb-auto text-xs">
              <Countdown startDateTime={auctionDate} type={type} />
            </p>
            <p className="text-[10px] mt-auto">
              {type === "exhibition" ? (
                <>
                  Min Bid: <b>{convertToReadableNumber(minBid)} RWA</b>
                </>
              ) : yourBid > 0 ? (
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
