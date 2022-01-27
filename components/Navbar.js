
import Link from 'next/link'

import Button from '@mui/material/Button';
import styled from 'styled-components'


import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import SideBar from './SideBar';


const NavDesktop = styled.nav`
    height: 80px;
    background: #000;
    display:flex;
    justify-content: space-between;
    align-items: center;
    color:#ffff;
    padding-right: 3rem;
    padding-left: 3rem;
    width: 100%;
    transition: 0.3s;
    border-bottom: 1px solid #ffffff14;`;

const Logo = styled.img`
    max-height: 35px;
    object-fit: cover;`

const StyleLink = styled.a`
    padding: 0rem 2rem;`

const NavLeftArea = styled.div`
    display:flex;
    align-items: center;    
`

const NavRightArea = styled.div`
    display:flex;
    align-items: center; `

const NavMobile = styled.div`
    color:#ffff;
    padding-right: 1rem;
    padding-left: 1rem;
    padding-top:1rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
   
`

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
      <div>
         
          <NavMobile style={{'display':  isMobile?'flex':'none' }}>
            <SideBar></SideBar>
            <Link href="/" passHref> 
              <Logo src="logo/logo-white.png"></Logo>
            </Link>
          </NavMobile>
          <NavDesktop style={{'display':  isMobile?'none':'flex' }}>
            <NavLeftArea>
                <Link href="/" passHref> 
                    <Logo src="logo/logo-white.png"></Logo>
                </Link>
                <Link href="/" passHref><StyleLink>Home</StyleLink></Link>
                <Link href="/" passHref><StyleLink>Member</StyleLink></Link>
                <Link href="/referral" passHref><StyleLink>Referral</StyleLink></Link>
                <Link href="/insurance" passHref><StyleLink>Insurance</StyleLink></Link>
                <Link href="/" passHref><StyleLink>Underwriting</StyleLink></Link>
                <Link href="/" passHref><StyleLink>Claim</StyleLink></Link>
                <Link href="/" passHref><StyleLink>Statistic</StyleLink></Link>
                <Link href="/" passHref><StyleLink>Swap</StyleLink></Link>
            </NavLeftArea>
            <NavRightArea>
                <Button variant="contained" href="/">ConnectWallet</Button>
            </NavRightArea>
        </NavDesktop>
      </div>
    
  )
}

export default Navbar
