import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

export const projectId = "7a094e114d5bcd22031585b7b9c5ad5d";

// 2. Set chains
export const mainnet = {
    chainId: 42421,
    name: "Asset Chain Testnet",
    currency: "RWA",
    explorerUrl: "https://testnet.assetchain.org/",
    rpcUrl: "https://enugu-rpc.assetchain.org/",
};

// 3. Create a metadata object
export const metadata = {
    name: "stakeart",
    description: "AppKit Example",
    url: "https://web3modal.com", // origin must match your domain & subdomain
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// 4. Create Ethers config
export const ethersConfig = defaultConfig({
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