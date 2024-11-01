import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { BookDashedIcon } from "lucide-react";
import { CardFooter } from "../ui/card";

const AuctionRules = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"transparent"}
          className="flex gap-1.5 text-sm items-center"
        >
          <BookDashedIcon size={14} />
          Auction rules
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bid rules</DialogTitle>
          <hr className="mt-2 h-px bg-secondary" />
        </DialogHeader>

        <CardFooter className="p-0 flex flex-col items-start gap-5 *:flex *:gap-1 *:text-sm">
          <div>
            &bull; The auctioneer can choose any bidder but top bidders has
            better win/rate chance to win an auction.
          </div>

          <div>&bull; You can retract your bid offer during the auction.</div>

          <div>
            &bull; Auctions have a duration, once the duration is passed you
            cannot retract your offer but can choose not to transfer.
          </div>

          <div>
            &bull; You cannot place a bid less than the minimum bid stipulated
            by the auctioneer.
          </div>

          <div>
            &bull; Once you have won an auction and transfers has been confirmed
            you will own access rights to the art and can re-auction.
          </div>
        </CardFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuctionRules;
