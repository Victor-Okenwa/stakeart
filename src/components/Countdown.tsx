import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Countdown = ({ startDateTime }: { startDateTime: Date }) => {
  const now = new Date();
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [difference, setDifference] = useState(
    startDateTime.getTime() - now.getTime()
  );

  const calculateTimeLeft = () => {
    const currentTime = new Date();
    const difference = startDateTime.getTime() - currentTime.getTime();
    setDifference(difference);
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      const combinedTime = `
      ${days !== 0 ? days + "d" : ""}
      ${hours !== 0 ? hours + ":" : ""}${minutes !== 0 ? (minutes < 10 ? '0' + minutes : minutes) + ":" : "00" + ":"}${
        seconds !== 0 ? seconds < 10 ? '0'+ seconds : seconds : "00"
      }
      `;
      setTimeLeft(combinedTime);
    } else {
      setTimeLeft("Auction over");
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div
      className={cn("text-green-500", {
        "text-destructive": difference < 1200000,
      })}
    >
      {timeLeft}
    </div>
  );
};

export default Countdown;
