"use client";

import { ConnectWalletButton } from "@/src/components/metamask/metaBtn";
import { MetaMaskProvider } from "@metamask/sdk-react";
import MetaMaskLogo from "../../../public/images/metamask.png";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/src/components/footer/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const GinServerBaseURL = "http://localhost:8080";

export const MetaMaskLogin = () => {
  const [isConnectd, setIsConnectd] = useState<boolean>();
  const [address, setAddress] = useState<string>();

  return (
    <div className="min-w-[1024px] w-full">
      <div className="flex flex-col justify-center items-center min-h-[768px] h-[96vh]">
        <h1 className="font-bold text-6xl" style={{ color: "rgb(0,176,80)" }}>
          NEXT FARM
        </h1>
        <h3 className="text-3xl font-extrabold">for Workers</h3>

        <Image src={MetaMaskLogo} alt="Main" width={300} height={300} />
        <ConnectWalletButton
          isConnectd={isConnectd}
          setIsConnectd={setIsConnectd}
          address={address}
          setAddress={setAddress}
        />
      </div>
      <Footer />
    </div>
  );
};

export default MetaMaskLogin;
