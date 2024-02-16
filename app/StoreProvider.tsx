"use client";
import store from "@/lib/store";
import { MetaMaskProvider } from "@metamask/sdk-react";
import { Provider } from "react-redux";

export function StoreProviders({ children }: { children: React.ReactNode }) {
  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host
    }
  };

  return (
    <Provider store={store}>
      <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
        {children}
      </MetaMaskProvider>
    </Provider>
  );
}
