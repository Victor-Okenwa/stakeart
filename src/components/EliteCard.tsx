import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./ui/card";
import { Link } from "react-router-dom";
import { convertToReadableNumber } from "@/lib/utils";

const EliteCard = ({ id, avatar, numberOfAuctions, avgPrice }: Elite) => {
  return (
    <Link to={`/elites/${id}`}>
      <Card className="p-0">
        <CardContent className="flex p-2 items-center justify-between">
          <CardHeader className="flex flex-row gap-4 p-0">
            <img src={avatar} className="size-16" alt="" />
            <div className="flex flex-col justify-between text-xs">

            </div>
          </CardHeader>

          <CardFooter className="p-0 flex flex-col h-full basis-[50%] items-end">
            <p className="text-xs text-purple">Auctions: { convertToReadableNumber(numberOfAuctions)}</p>
            <p className="text-[10px]">Avg Price: <span className="text-[11px]">{convertToReadableNumber(avgPrice)}</span><span className="text-[9px]">RWA</span></p>
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EliteCard;
