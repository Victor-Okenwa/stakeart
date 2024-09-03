import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "./ui/card";
  import { Link } from "react-router-dom";
import ReduceString from "./ReduceString";
  
const CollectCard = ({
    id,
    avatar,
    owner,
    title,
  }: CollectCardProps) => {
  return (
    <Link to={"/collectibles/" + id}>
    <Card className="p-0">
      <CardContent className="flex p-2 items-center justify-between">
        <CardHeader className="flex flex-row gap-4 p-0">
          <img src={avatar} className="size-10" alt="" />
          <div className="flex flex-col justify-between text-xs">
            <CardTitle className="text-xs capitalize text-[11px]">
              <ReduceString text={title} />
            </CardTitle>
            <CardDescription className="text-xs">
              <ReduceString text={owner} />
            </CardDescription>
          </div>
        </CardHeader>

   
      </CardContent>
    </Card>
  </Link>
  )
}

export default CollectCard