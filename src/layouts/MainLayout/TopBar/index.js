import Link from "next/link";
import * as React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import AppBar from "@mui/material/AppBar";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SideBar from "../SideBar";
import { useMoralis } from "react-moralis";

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
const IsAuthenRender = React.forwardRef(function IsAuthenRender(props, ref) {
  const { authenticate, isAuthenticated, user } = useMoralis();
  if (!isAuthenticated) {
    return (
      <Button
        variant="contained"
        onClick={() =>
          authenticate({
            onComplete: (res) => {
              alert("🎉");
            },
          })
        }
      >
        ConnectWallet
      </Button>
    );
  } else {
    return <Button variant="contained">{user.get("username")}</Button>;
  }
});

const Topbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { authenticate, isAuthenticated, user } = useMoralis();
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
            <Link href="/" passHref>
              <StyleLink>Member</StyleLink>
            </Link>
            <Link href="/referral" passHref>
              <StyleLink>Referral</StyleLink>
            </Link>
            <Link href="/buycover" passHref>
              <StyleLink>BuyCover</StyleLink>
            </Link>
            <Link href="/provider" passHref>
              <StyleLink>Provider</StyleLink>
            </Link>
            <Link href="/pool" passHref>
              <StyleLink>Pool</StyleLink>
            </Link>
            <Link href="/checkout" passHref>
              <StyleLink>Checkout</StyleLink>
            </Link>
            <Link href="/applyforpool" passHref>
              <StyleLink>ApplyForPool</StyleLink>
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
