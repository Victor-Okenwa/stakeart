import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Link } from "react-router-dom";
import ReduceString from "./ReduceString";

const StakeCard = ({
  id,
  avatar,
  staker,
  title,
  minInterest,
  maxAllowableDuration,
}: StakeCardProps) => {
  return (
    <Link to={"/stakes/" + id}>
      <Card className="p-0">
        <CardContent className="flex p-2 items-center justify-between">
          <CardHeader className="flex flex-row gap-4 p-0">
            <img src={avatar} className="size-10" alt="" />
            <div className="flex flex-col justify-between text-xs">
              <CardTitle className="text-xs capitalize text-[11px]">
                <ReduceString text={title} />
              </CardTitle>
              <CardDescription className="text-xs">
                <ReduceString text={staker} />
              </CardDescription>
            </div>
          </CardHeader>

          <CardFooter className="p-0 flex flex-col h-full basis-[50%] items-end">
            <p className="text-green-500 mb-auto text-xs">{minInterest}</p>
            <p className="text-[10px] mt-auto">{maxAllowableDuration}</p>
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  );
};

export default StakeCard;
