import { styled } from '@mui/material/styles';
import styles from 'styled-components'

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';


const RefferalTopContentArea = styled('div')(({ theme }) => ({
  height: '250px',
  width:'90%',
  position: 'absolute',
  top: '-80px',
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: '1px solid #ffffff14',
  backgroundColor: '#fff',
  border: '1px solid #e5e6ea',
  borderRadius: '20px',
  padding: '20px 0 20px 0',
  [theme.breakpoints.down('sm')]: {
        width:'100%',
        position: 'relative',
        top: 'unset'
  }
}));

const RefferalTopContentLeftArea = styles.div`
    color:#000;
    width:50%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column`;

const RefferalTopContentRightArea = styles.div`
    color:#000;
    width:50%;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column`;

const RefferalClaimHeadText = styled('h4')(({ theme }) => ({
      fontWeight: 600,
      marginBottom: '10px',
      lineHeight: 1.25,
      fontSize:'2rem',
      [theme.breakpoints.down('sm')]: {
        fontSize:'1.5rem',
      }
}));
    
const RefferalClaimSubHeadText = styled('p')(({ theme }) => ({
      fontSize: '20px',
      fontWeight: 600,
      color:'#acacac',
      [theme.breakpoints.down('sm')]: {
        fontSize:'16px',
      }
}));
    
const RefferalClaimButton = styled(Button)(({ theme }) => ({
      padding: '8px 8px',
      textTransform: 'none',
      
}));

const TopContentSection = () => {
  return (
    <RefferalTopContentArea>
      <RefferalTopContentLeftArea>
        <RefferalClaimHeadText >0.547 NECT</RefferalClaimHeadText>
        <RefferalClaimSubHeadText>Referral Reward</RefferalClaimSubHeadText>
        <RefferalClaimButton size="large" variant="contained" startIcon={<AccountBalanceWalletIcon />}> Claim Reward</RefferalClaimButton>
      </RefferalTopContentLeftArea>
      <Divider orientation="vertical" flexItem></Divider>
      <RefferalTopContentRightArea>
        <RefferalClaimHeadText >187 USD</RefferalClaimHeadText>
        <RefferalClaimSubHeadText>NECT Market Price</RefferalClaimSubHeadText>
        <RefferalClaimButton size="large" variant="contained" startIcon={<AccountBalanceWalletIcon />}>  Get NECT</RefferalClaimButton>
      </RefferalTopContentRightArea>
    </RefferalTopContentArea>
  )
   
};

export default TopContentSection;
