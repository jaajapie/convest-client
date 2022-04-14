import React from "react";

import { config } from "../src/config";
import "../styles/globals.css";
import "../styles/particles.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
