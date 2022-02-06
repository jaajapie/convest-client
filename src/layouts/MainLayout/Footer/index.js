import styles from 'styled-components'
import { styled } from '@mui/material/styles';
import Link from 'next/link'
import Divider from '@mui/material/Divider';

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const FooterSection = styled('div')(({ theme }) => ({
    display:'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#13131d',
    borderTop: '1px solid #ffffff14',
    paddingRight: '3rem',
    paddingLeft: '3rem',
    fontSize: '16px',
    fontWeight: 400,
    color:'#acacac',
    width:'100%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        height: '20vh',
        paddingRight: '0px',
        paddingLeft: '0px',
        paddingBottom: '3rem',
    }
  }));

const StyleLink = styles.a`
    padding: 0rem .5rem;`

const FooterLeftArea = styled('div')(({ theme }) => ({
        display:'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
}));
const FooterRightArea = styled('div')(({ theme }) => ({
    display:'flex',
    alignItems: 'center',
    justifyConten: 'space-around',
    
}));

const FooterLinkLeftArea = styled('div')(({ theme }) => ({
    marginLeft:'30px',
    [theme.breakpoints.down('sm')]: {
        marginLeft: '0px'
    }
}));

const FooterSocial = styles.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffff;
    transition: 0.4s;
    background: #242435;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
        color: #ffff ;
        background: #00a3ff;
    }`


const FooterVericleLine = styled(Divider)(({ theme }) => ({
        marginLeft:30,
        borderColor:'#383636',
        marginTop: 12,
        marginBottom: 12,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
}));

export const Footer = () => {
  return <FooterSection>
      <FooterLeftArea>
        <p>© COVEST, Inc. All rights reserved.</p>
        <FooterVericleLine orientation="vertical" variant="middle" flexItem />
        <FooterLinkLeftArea>
            <Link href="/" passHref><StyleLink>Terms</StyleLink></Link>
            <Link href="/" passHref><StyleLink>Privacy Policy</StyleLink></Link>
        </FooterLinkLeftArea>
      </FooterLeftArea>
      <FooterRightArea>
            <FooterSocial>
                <FacebookOutlinedIcon></FacebookOutlinedIcon>
            </FooterSocial>
           <FooterSocial>
                <TwitterIcon></TwitterIcon>
           </FooterSocial>
           <FooterSocial>
                <InstagramIcon></InstagramIcon>
            </FooterSocial>
            <FooterSocial>
                <LinkedInIcon></LinkedInIcon>
            </FooterSocial>
            <FooterSocial>
                <MailOutlineIcon></MailOutlineIcon>
            </FooterSocial>
      </FooterRightArea>
  </FooterSection>;
};

export default Footer;
