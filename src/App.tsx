import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppOutlet from "./outlets/AppOutlet";
import Home from "./pages/home/Home";
import Withdraw from "./pages/Withdraw";
import AddFund from "./pages/AddFund";
import Swap from "./pages/Swap";
import Profile from "./pages/Profile";
import BidParticipation from "./pages/home/BidParticipation";
import { useEffect, useState } from "react";
import IntroPage from "./components/IntroPage";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";
import Auctions from "./pages/auctions/Auctions";
import Auction from "./pages/auctions/Auction";
import Stakes from "./pages/stakes/Stakes";
import Stake from "./pages/stakes/Stake";
import { Toaster } from "sonner";
import Collectibles from "./pages/collectibles/Collectibles";
import Collectible from "./pages/collectibles/Collectible";
import Gallery from "./pages/gallery/Gallery";
import GalleryOutlet from "./outlets/GalleryOutlet";
import MintAsset from "./pages/gallery/MintAsset";
import MakeCollectible from "./pages/gallery/MakeCollectible";
import AuctionAsset from "./pages/gallery/AuctionAsset";

// 1. Your WalletConnect Cloud project ID
const projectId = "7a094e114d5bcd22031585b7b9c5ad5d";

// 2. Set chains
const mainnet = {
  chainId: 42421,
  name: "Asset Chain Testnet",
  currency: "RWA",
  explorerUrl: "https://testnet.assetchain.org/",
  rpcUrl: "https://enugu-rpc.assetchain.org/",
};

// 3. Create a metadata object
const metadata = {
  name: "stakeart",
  description: "AppKit Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 42421, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

function App() {
  const [isAppInitializing, setIsAppInitializing] = useState(false);

  // useEffect(() => {

  //   document.addEventListener("load",
  //     ()=> setIsAppInitializing(false);
  //     );
  //   return () =>
  //     document.removeEventListener("DOMContentLoaded", () =>
  //       handleIsAppInitializing()
  //     );
  // }, []);

  return (
    <div className="app">
      {isAppInitializing ? (
        <IntroPage />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<AppOutlet />}>
              <Route path="home" element={<Home />} />
              <Route path="home/participation" element={<BidParticipation />} />

              <Route path="auctions" element={<Auctions />} />
              <Route path="auctions/:id" element={<Auction />} />

              <Route path="stakes" element={<Stakes />} />
              <Route path="stakes/:id" element={<Stake />} />

              <Route path="collectibles" element={<Collectibles />} />
              <Route path="collectibles/:id" element={<Collectible />} />

              <Route path="withdraw" element={<Withdraw />} />
              <Route path="add-fund" element={<AddFund />} />
              <Route path="swap" element={<Swap />} />
              <Route path="profile" element={<Profile />} />
            </Route>

            <Route path="/gallery" element={<GalleryOutlet />}>
              <Route path="home" element={<Gallery />} />
              <Route path="asset/auction-asset/:id" element={<AuctionAsset />} />

              <Route path="mint" element={<MintAsset />} />
              <Route
                path="home/make-collectible"
                element={<MakeCollectible />}
              />
            </Route>
          </Routes>
          <Toaster />
        </Router>
      )}
    </div>
  );
}

export default App;
