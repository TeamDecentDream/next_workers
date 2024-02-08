"use client"

import { ConnectWalletButton } from "@/src/components/metamask/metaBtn";
import { MetaMaskProvider } from "@metamask/sdk-react";

import Link from "next/link";

export const MetaMaskLogin = () => {
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
      <nav className="flex items-center justify-between max-w-screen-xl px-6 mx-auto py-7 rounded-xl">
        <div className="flex gap-4 px-6">
          <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
            <ConnectWalletButton />
          </MetaMaskProvider>
        </div>
      </nav>
    );
  };
  
  export default MetaMaskLogin;