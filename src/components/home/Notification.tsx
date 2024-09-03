import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Bell } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { CompHand, GuitarHand } from "../../assets/images";
import NotificationItem from "./NotificationItem";
import { Button } from "../ui/button";
import { useState } from "react";

const Notification = () => {
  const notificationsData: Notification[] = [
    {
      id: "13452-781eve718287-61723g617",
      avatar: GuitarHand,
      message: "Jeremy Mason has placed an auction on an art you took part of.",
      isRead: true,
    },
    {
      id: "13452-781eve718287-61723g617",
      message: "Mike Okalawon just won the bid for the renascence art.",
      isRead: false,
    },
    {
      id: "1451-1891-61723g617",
      avatar: CompHand,
      message: "Okey James just announced a re-auction",
      isRead: true,
    },
    {
      id: "791-3561-61723g617",
      // avatar: GuitarHand,
      message: "Mike Adenuga has placed an auction on an art you took part of",
      isRead: false,
    },
  ];

  const [notifications, setNotifications] = useState(notificationsData);
  const handleMarkAllRead = () => {
    setNotifications(
      notifications.map((notification) => {
        return { ...notification, isRead: true };
      })
    );
  };

  return (
    <Popover>
      <PopoverTrigger>
        <div className="relative">
          <Bell />
          {notifications.find((notification) => !notification.isRead) && (
            <div className="absolute size-2 bg-gold rounded-full top-0 right-px"></div>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className=" p-0 mr-2 ml-2 w-[90vw] flex flex-col gap-3">
        <Command>
          <CommandInput placeholder="Search notification..." />
          <div className="flex justify-between p-1 ">
            <Button
              size="no-pad"
              variant={"transparent"}
              className="text-sm text-purple"
              onClick={() => setNotifications([])}
            >
              Clear all
            </Button>
            <Button
              size="no-pad"
              variant={"transparent"}
              className="text-sm text-purple"
              onClick={handleMarkAllRead}
            >
              Mark all read
            </Button>
          </div>
          <CommandList>
            <CommandEmpty>No Notifications found.</CommandEmpty>
            <CommandGroup>
              {notifications.map((notification) => (
                <NotificationItem notification={notification} />
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default Notification;
