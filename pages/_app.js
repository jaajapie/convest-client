import React from "react"

import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/particles.css'
import { MoralisProvider } from "react-moralis"

const moralisAppID = `47eLihclURDGph1IfLcfvlvL8R7dks2NbG4qP5zA`
const moralisServerUrl = `https://0pfnnmayjsgz.usemoralis.com:2053/server`

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider appId={moralisAppID} serverUrl={moralisServerUrl}>
      <Layout>
          <Component {...pageProps} />
      </Layout>
  </MoralisProvider>
  
  )
}

export default MyApp
