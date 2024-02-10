"use client";

import Link from "next/link";
import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";


export const ConnectWalletButton = () => {
  const { sdk, connected, connecting, account } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
      console.log("1")
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  return (
    <div className="relative">
      {connected ? (
        <>
        <p>{account}</p>
            <button
              onClick={disconnect}
              className="block w-full pl-2 pr-4 py-2 text-left text-[#F05252] hover:bg-gray-200"
            >
              Disconnect
            </button>
        </>
      ) : (
        <button disabled={connecting} onClick={connect}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};