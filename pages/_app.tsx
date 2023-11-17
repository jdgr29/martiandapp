import "../styles/globals.css";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import React from "react";
import { useState } from "react";
import Web3Context, {
  Web3ContextProps,
} from "../src/modules/core/web3/Web3Context";
import { ethers } from "ethers";
import { Provider } from "react-redux";
import { store, wrapper } from "../src/modules/core/redux/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const [address, setAddress] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.providers.Provider | null>(
    null
  );

  // Create web3Context for whole app
  let web3Context: Web3ContextProps = {
    address,
    setAddress,
    provider,
    setProvider,
  };

  return (
    <Provider store={store}>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <Web3Context.Provider value={web3Context}>
          <Component {...pageProps} />
        </Web3Context.Provider>
      </SessionContextProvider>
    </Provider>
  );
}
export default MyApp;
