"use client";

import { ConnectWalletButton } from "@/src/components/metamask/metaBtn";
import { MetaMaskProvider } from "@metamask/sdk-react";
import MetaMaskLogo from "../../../public/images/metamask.png";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/src/components/footer/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const GinServerBaseURL = "http://localhost:8080"

export const MetaMaskLogin = () => {
  const [isConnectd, setIsConnectd] = useState<boolean>();
  const [address, setAddress] = useState<string>();

  const router = useRouter()

  useEffect(()=>{
    console.log(address,isConnectd)
  },[isConnectd])

  useEffect(()=>{
    console.log(address,isConnectd)
    if(address && isConnectd){
      
      // router.replace('/worker/main')
    }
  },[address])

  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host,
    },
  };

  return (
    <div className="min-w-[1024px] w-full">
      <div className="flex flex-col justify-center items-center min-h-[768px] h-[96vh]">
        <h1 className="font-bold text-6xl" style={{ color: "rgb(0,176,80)" }}>
          NEXT FARM
        </h1>
        <h3 className="text-3xl font-extrabold">for Workers</h3>

        <Image src={MetaMaskLogo} alt="Main" width={300} height={300} />
        
        <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
          <ConnectWalletButton 
          isConnectd={isConnectd}
          setIsConnectd={setIsConnectd}
          address={address}
          setAddress={setAddress}
          />
        </MetaMaskProvider>
        
      </div>
      <Footer />
    </div>
    // <nav className="flex flex-col items-center justify-between max-w-screen-xl px-6 mx-auto py-7 rounded-xl">
    //   <h1 className="font-bold text-6xl" style={{ color: "rgb(0,176,80)" }}>
    //     NEXT FARM
    //   </h1>
    //   <h3 className="text-3xl font-extrabold">for Workers</h3>
    //   <div>
    //     <Image src={MetaMaskLogo} alt="metamask" width={256} height={256} />
    //   </div>
    //   <div className="flex gap-4 px-6">

    //   </div>
    // </nav>
  );
};

export default MetaMaskLogin;
