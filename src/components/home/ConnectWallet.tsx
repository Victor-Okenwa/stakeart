import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { StakeArt } from "@/assets/logo";
import { Link } from "react-router-dom";
import { CoinbaseSvg, MetaMaskSvg, TrustWalletSvg } from "@/assets/images";

const ConnectWallet = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"purple"} className="shadow-sm border border-secondary/40">Connect Wallet</Button>
      </DialogTrigger>
      <DialogContent className="px-2">
        <DialogHeader>
          <DialogTitle className="flex gap-4 items-center justify-center">
            Connect to <img src={StakeArt} className="size-8" alt="Stake Art" />
          </DialogTitle>
        </DialogHeader>

        <DialogFooter className="flex flex-col gap-5 bg-secondary py-5 shadow-inner px-2 overflow-y-auto max-h-[80vh]">
          <Button asChild variant={"outline"} className="items-left justify-start py-8" size={"lg"}>
            <Link to="https://metamask" className="flex gap-3 items-left">
              <img src={MetaMaskSvg} className="size-8" alt="" /> Metamask
            </Link>
          </Button>
          <Button asChild variant={"outline"} className="items-left justify-start py-8" size={"lg"}>
            <Link to="https://coinbase" className="flex gap-3 items-left">
              <img src={CoinbaseSvg} className="size-8" alt="" /> Coinbase
            </Link>
          </Button>
          <Button asChild variant={"outline"} className="items-left justify-start py-8" size={"lg"}>
            <Link to="https://coinbase" className="flex gap-3 items-left">
              <img src={TrustWalletSvg} className="size-8" alt="" /> Trust
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectWallet;
