import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { UserCircle } from "lucide-react";


import ReduceString from './ReduceString'

const LeaderBoardCard = ({index, id, avatar, address, }: LeaderBoardCardProps) => {
  return (
    <Card key={id} className="z-0">
      <CardContent className="flex flex-row justify-between items-center p-0">
        <CardHeader className="z-0 flex flex-row items-center gap-2 p-2">

<div className="rounded-full px-3 py-2 text-[10px] bg-purple text-secondary size-auto my-auto">{index + 1}</div>

          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>
              <UserCircle />
            </AvatarFallback>
          </Avatar>

          <CardDescription className="text-[10px]">
            <ReduceString text={address} strLength={15} />
          </CardDescription>
</CardHeader>
      </CardContent>
    </Card>
  );
};

export default LeaderBoardCard;
