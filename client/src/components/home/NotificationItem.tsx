import { CommandItem } from "../ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Ellipsis, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const NotificationItem = ({ notification }: NotificationItemProps) => {
  return (
    <CommandItem
      key={notification.id}
      value={notification.message}
      className={cn("flex gap-2 items-center", { "bg-secondary": notification.isRead })}
    >
      <Avatar className="size-8">
        <AvatarImage src={notification.avatar} />
        <AvatarFallback className="bg-secondary shadow-xl border">
          {notification.message.charAt(0)}
        </AvatarFallback>
      </Avatar>
      <p className="text-xs">{notification.message}</p>

      <Popover>
        <PopoverTrigger className="ml-auto">
          <Ellipsis />{" "}
        </PopoverTrigger>
        <PopoverContent className="flex w-fit p-0">
          <Button className="flex gap-1 items-center text-sm" size={"sm"}>
            <Trash size={16} /> Delete
          </Button>
        </PopoverContent>
      </Popover>
    </CommandItem>
  );
};

export default NotificationItem;
