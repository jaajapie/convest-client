import Link from "next/link";
import * as React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SideBar from "../SideBar";
import ConnectWeb3 from "../../../hooks/useConnectWeb3";
import Web3 from "web3";
import { useConnectWallet, useSetChain, useWallets } from "@web3-onboard/react";
import { ethers, ContractFactory } from "ethers";
import { initWeb3Onboard } from "../../../wallet";
import { initNotify } from "../../../notify";

let provider;
let web3;

const NavDesktop = styled.nav`
  height: 80px;
  background: #ffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000;
  padding-right: 3rem;
  padding-left: 3rem;
  width: 100%;
  transition: 0.3s;
  border-bottom: 1px solid #ffffff14;
`;

const Logo = styled.img`
  max-height: 35px;
  object-fit: cover;
`;

const StyleLink = styled.a`
  padding: 0rem 2rem;
`;

const NavLeftArea = styled.div`
  display: flex;
  align-items: center;
`;

const NavRightArea = styled.div`
  display: flex;
  align-items: center;
`;

const NavMobile = styled.div`
  color: #000;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
`;

String.prototype.replaceBetween = function (start, end, what) {
  return this.substring(0, start) + what + this.substring(end);
};

const Topbar = () => {
  const theme = useTheme();
  const [status, setStatus] = useState("Login");
  const [isLogin, setLogin] = useState(false);
  const [onboard, setOnboard] = useState(null);
  const [notify, setNotify] = useState(null);
  const connectedWallets = useWallets();
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setOnboard(initWeb3Onboard);
    setNotify(initNotify());
  }, []);

  useEffect(() => {
    if (!connectedWallets.length) return;

    const connectedWalletsLabelArray = connectedWallets.map(
      ({ label }) => label
    );
    window.localStorage.setItem(
      "connectedWallets",
      JSON.stringify(connectedWalletsLabelArray)
    );
  }, [connectedWallets]);

  useEffect(() => {
    if (!wallet?.provider) {
      provider = null;
    } else {
      provider = new ethers.providers.Web3Provider(wallet.provider, "any");

      web3 = new Web3(wallet.provider);
    }
  }, [wallet]);

  useEffect(() => {
    const previouslyConnectedWallets = JSON.parse(
      window.localStorage.getItem("connectedWallets")
    );

    if (previouslyConnectedWallets?.length) {
      async function setWalletFromLocalStorage() {
        await connect({ autoSelect: previouslyConnectedWallets[0] });
        setStatus("Ready");
        window.localStorage.setItem("isLogin", true);
        setLogin(true);
      }
      setWalletFromLocalStorage();
    }
  }, [onboard, connect]);
  async function Login() {
    var islogin = window.localStorage.getItem("isLogin") && isLogin;

    if (
      (status === "Login" && islogin === false) ||
      (status === "Login" && islogin === null)
    ) {
      console.log(islogin);
      await connect();
      setStatus("Ready");
      window.localStorage.setItem("isLogin", true);
      setLogin(true);
    } else {
      if (status === "Ready" && islogin === true && isLogin === true) {
        //   Ready();
        console.log("READY!");
      }
    }
  }

  const IsAuthenRender = React.forwardRef(function IsAuthenRender(props, ref) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [address, setAddress] = useState("");

    useEffect(() => {
      const previouslySelectedWallet =
        window.localStorage.getItem("selectedWallet");

      if (previouslySelectedWallet && ConnectWeb3.onboard) {
        ConnectWeb3.onboard.walletSelect(previouslySelectedWallet);
      }
    }, [ConnectWeb3.onboard]);

    //
    const SetAuthenValue = () => {
      if (typeof window !== "undefined" && window.localStorage) {
        const isLogin = localStorage.getItem("isLogin");
        const addressStorage = localStorage.getItem("address");
        if (address === "" && addressStorage != null && isLogin == "true") {
          setIsAuthenticated(isLogin);
          setAddress(
            addressStorage.replaceBetween(5, addressStorage.length - 4, "...")
          );
          // window.localStorage.setItem("address", null);
          // window.localStorage.setItem("isLogin", false);
          // window.localStorage.setItem("selectedWallet", null);
        }
      }
    };

    SetAuthenValue();

    const connectWallet = async () => {
      await ConnectWeb3?.onboard?.walletSelect();
      await ConnectWeb3?.onboard?.walletCheck();
      SetAuthenValue();
    };

    return (
      <div className="div-btn">
        {!onboard || !notify ? <div>Loding...</div> : <></>}
        <div>
          {connectedWallets[0]?.accounts[0] ? (
            <h4>{`Wallet : ${connectedWallets[0]?.accounts[0]?.address}`}</h4>
          ) : (
            <></>
          )}
        </div>
        <button className="btn btn-primary" onClick={Login}>
          {status}
        </button>
      </div>
    );
    // if (connectedWallets[0]?.accounts[0]) {
    //   return (
    //     <Button
    //       variant="contained"
    //       onClick={() => {
    //         Login();
    //       }}
    //     >
    //       ConnectWallet
    //     </Button>
    //   );
    // } else {
    //    return <Button variant="contained"> {connectedWallets[0]?.accounts[0]?.address}</Button>;

    // }
  });

  return (
    <div>
      <AppBar>
        <NavMobile style={{ display: isMobile ? "flex" : "none" }}>
          <SideBar></SideBar>
          <Link href="/" passHref>
            <Logo src="logo/logo-dark.png"></Logo>
          </Link>
        </NavMobile>
        <NavDesktop style={{ display: isMobile ? "none" : "flex" }}>
          <NavLeftArea>
            <Link href="/" passHref>
              <Logo src="logo/logo-dark.png"></Logo>
            </Link>

            <Link href="/" passHref>
              <StyleLink>Home</StyleLink>
            </Link>
            <Link href="/referral" passHref>
              <StyleLink>Referral</StyleLink>
            </Link>

            <Link href="/pool" passHref>
              <StyleLink>Get Insured</StyleLink>
            </Link>

            <Link href="/provider" passHref>
              <StyleLink>Become Provider</StyleLink>
            </Link>
          </NavLeftArea>
          <NavRightArea>
            <IsAuthenRender></IsAuthenRender>
          </NavRightArea>
        </NavDesktop>
      </AppBar>
    </div>
  );
};

export default Topbar;
