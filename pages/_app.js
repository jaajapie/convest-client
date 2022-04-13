import React from "react";

import { config } from "../src/config";
import "../styles/globals.css";
import "../styles/particles.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={config.appId} serverUrl={config.serverurl}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
