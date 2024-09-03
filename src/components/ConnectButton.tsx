import { UserCircle } from "lucide-react";
import ReduceString from "./ReduceString";
import { Button } from "./ui/button";
import { useWeb3Modal, useWeb3ModalAccount, useWeb3ModalEvents } from "@web3modal/ethers/react";

export default function ConnectButton() {
  const { open} = useWeb3Modal();
  const { isConnected, status } = useWeb3ModalAccount();

  
  return (
    <>
      {status}
      {isConnected ? (
        <Button
          variant="transparent"
          size={"no-pad"}
          onClick={() => open({ view: "Account" })}
          asChild
        >
          <UserCircle className="cursor-pointer" />
          {/* {status} */}
        </Button>
      ) : (
        <Button
          onClick={() => open()}
          variant={"purple"}
          className="shadow-sm border border-secondary/40"
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}

// export default function ConnectButton() {
//   // 4. Use modal hook
//   const { open } = useWeb3Modal()

//   return (
//     <>
//       <button onClick={() => open()}>Open Connect Modal</button>
//       <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
//     </>
//   )
// }

// import { useWeb3ModalProvider, useWeb3ModalAccount } from '@web3modal/ethers/react'
// import { BrowserProvider, Contract, formatUnits } from 'ethers'

// const USDTAddress = '0x617f3112bf5397D0467D315cC709EF968D9ba546'

// The ERC-20 Contract ABI, which is a common contract interface
// for tokens (this is the Human-Readable ABI format)
// const USDTAbi = [
//   'function name() view returns (string)',
//   'function symbol() view returns (string)',
//   'function balanceOf(address) view returns (uint)',
//   'function transfer(address to, uint amount)',
//   'event Transfer(address indexed from, address indexed to, uint amount)'
// ]

// function Components() {
//   const { address, chainId, isConnected } = useWeb3ModalAccount()
//   const { walletProvider } = useWeb3ModalProvider()

//   async function getBalance() {
//     if (!isConnected) throw Error('User disconnected')

//     const ethersProvider = new BrowserProvider(walletProvider)
//     const signer = await ethersProvider.getSigner()
//     // The Contract object
//     const USDTContract = new Contract(USDTAddress, USDTAbi, signer)
//     const USDTBalance = await USDTContract.balanceOf(address)

//     console.log(formatUnits(USDTBalance, 18))
//   }

//   return <button onClick={getBalance}>Get User Balance</button>
// }
