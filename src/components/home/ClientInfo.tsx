import { ArrowUpDown, Eye, EyeOff, Images } from "lucide-react";
import { useContext, useState } from "react";
import { Button } from "../ui/button";
import { convertToReadableNumber } from "../../lib/utils";
import { RiAsterisk } from "react-icons/ri";
import Notification from "./Notification";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Link } from "react-router-dom";
import ConnectWallet from "./ConnectWallet";
import ConnectButton from "../ConnectButton";
import { useStoreState } from "@/store/store";
import { AppContext } from "@/context/AppContext";

const ClientInfo = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);
  const [balanceType, setBalanceType] = useState<"usdt" | "rwa">("rwa");

  const { balance } = useContext(AppContext);
  return (
    <section className="shadow-xl text-secondary bg-purple rounded-b-3xl py-10 px-4 flex justify-between items-center">
      {/* <ConnectWallet /> */}
      <div className="flex flex-col ">
        <div className="flex gap-1">
          <span className="text-[11px]">Available Balance</span>
          <Button
            variant={"transparent"}
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
            size={"no-pad"}
          >
            {isBalanceVisible ? <EyeOff size={16} /> : <Eye size={16} />}
          </Button>
        </div>

        <div className="h-10">
          {isBalanceVisible ? (
            <div className="flex items-baseline gap-px">
              <span className="text-xl">
                {balance == 0
                  ? '0.00'
                  : convertToReadableNumber(balance, 1)
                      .toLocaleString()
                      .slice(0, 6)}
              </span>
              <span className="uppercase text-[10px]">{balanceType}</span>
            </div>
          ) : (
            <div className="flex *:size-5">
              <RiAsterisk />
              <RiAsterisk />
              <RiAsterisk />
              <RiAsterisk />
              <RiAsterisk />
              <RiAsterisk />
            </div>
          )}
        </div>
        <ConnectButton />

        {/* <Button
          variant={"gold"}
          size={"icon"}
          className="px-2 py-1 w-fit h-fit"
          onClick={() =>
            setBalanceType(balanceType === "usdt" ? "rwa" : "usdt")
          }
        >
          <ArrowUpDown size={18} />
        </Button> */}
      </div>

      <div className="flex flex-col items-center justify-between gap-10">
        <Notification />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link to="/gallery">
                <Images />
              </Link>
            </TooltipTrigger>

            <TooltipContent>Gallery</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default ClientInfo;
