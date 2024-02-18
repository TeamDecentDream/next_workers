"use client";

import { useSDK } from "@metamask/sdk-react";
import { FC, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { setAddress, setIsConnected } from "@/lib/features/auth/authSlice";


const GinServerBaseURL = "http://localhost:8080";

export const ConnectWalletButton: FC = () => {
  const { sdk, connected, connecting, account } = useSDK();
  const router:AppRouterInstance = useRouter();
  const Auth:any = useSelector<any>(state => state.authReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsConnected(connected));
    if(account) {
      dispatch(setAddress(account));
    } else {
      dispatch(setAddress(""));
    }
  }, [connected]);

  useEffect(() => { 
    // if (Auth.accessToken && account) {
    //   axios
    //   .post(GinServerBaseURL + `/member/wallet`, {addr:account}, {headers: { Authorization: Auth.accessToken}})
    //   .then((resp) => {
    //     router.replace('/worker/main')
    //   })
    //   .catch((err)=>{
    //     console.log(err);
    //   })
    // }
    if(account) {
      dispatch(setAddress(account));
    } else {
      dispatch(setAddress(""));
    }
  }, [account, Auth.accessToken]);

  const connect = async () => {
    try {
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
      {account ? (
        <div className="flex flex-col bg-">
          <button
            onClick={disconnect}
            className="border-solid border-orange-600 border-2 rounded-xl py-1.5 px-4 text-white bg-orange-500 hover:text-orange-500 hover:bg-white"
          >
            Disconnect
          </button>
          <>{account}</>
        </div>
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