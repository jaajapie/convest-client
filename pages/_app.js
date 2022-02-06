import React from "react"

import { moralisConfig } from '../src/config';
import '../styles/globals.css'
import '../styles/particles.css'
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={moralisConfig.appId} serverUrl={moralisConfig.serverurl}>
      <Component {...pageProps} />
   </MoralisProvider>
  
  )
}

export default MyApp
