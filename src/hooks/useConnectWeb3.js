import Onboard from "bnc-onboard";
import Web3 from "web3";
import wallets from "./wallet";
import { config } from "../config";
import { useState, useEffect } from "react";

let web3 = null;

const onboard = Onboard({
  dappId: config.dappId, // [String] The API key created by step one above
  networkId: Number(config.networkId), // [Integer] The Ethereum network ID your Dapp uses.
  subscriptions: {
    address: async (address) => {
      if (address != null) {
        if (address.length === 42) {
          window.localStorage.setItem("address", address);

          window.localStorage.setItem("isLogin", true);
        } else {
          //   window.localStorage.setItem("isLogin", false);
        }
      } else {
        //  window.localStorage.setItem("isLogin", false);
      }
    },
    wallet: (wallet) => {
      if (wallet.provider) {
        // setWallet(wallet);

        //provider = new ethers.providers.Web3Provider(wallet.provider);
        web3 = new Web3(wallet.provider);
        window.localStorage.setItem("selectedWallet", wallet.name);
      } else {
        provider = null;
        // setWallet({});
      }
    },
    network: (network) => {
      // setNetwork(network);
    },
  },
  walletSelect: {
    wallets: wallets,
  },
});

const ConnectWeb3 = {
  onboard: onboard,
  web3: web3,
};
export default ConnectWeb3;
