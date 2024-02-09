"use client";

import Link from "next/link";
import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";
import { Dispatch, FC, SetStateAction, useEffect } from "react";

interface ConnectWalletButtonProps {
  isConnectd: boolean|undefined;
  setIsConnectd: Dispatch<SetStateAction<boolean|undefined>>
  address: string | undefined;
  setAddress: Dispatch<SetStateAction<string|undefined>>
}

export const ConnectWalletButton:FC<ConnectWalletButtonProps> = ({isConnectd, setIsConnectd,address, setAddress}) => {
  const { sdk, connected, connecting, account } = useSDK();

  useEffect(()=>{
    setIsConnectd(connected)
    setAddress(account)
  },[connected])

  useEffect(()=>{
    setAddress(account)
  },[account])

  const connect = async () => {
    try {
      console.log(sdk)
      await sdk?.connect();
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
    <div className="relative mt-4">
      {connected ? (
        <>
          <button
            onClick={disconnect}
            className="border-solid border-orange-600 border-2 rounded-xl py-1.5 px-4 text-white bg-orange-500 hover:text-orange-500 hover:bg-white"
          >
            Disconnect
          </button>
        </>
      ) : (
        <button
          className="border-solid border-orange-600 border-2 rounded-xl py-1.5 px-4 text-white bg-orange-500 hover:text-orange-500 hover:bg-white"
          disabled={connecting}
          onClick={connect}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};
