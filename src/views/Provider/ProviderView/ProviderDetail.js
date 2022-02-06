import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ProviderCardArea = styled('div')(({ theme }) => ({
    paddingLeft: '10px',
    paddingRight: '10px',
    [theme.breakpoints.down('sm')]: {
     
    }
}));

const ProviderCardInnerArea = styled('div')(({ theme }) => ({
    position: 'relative',
    height: '260px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    boxShadow: '0 0 5px #ccc',
    [theme.breakpoints.down('sm')]: {
     
    }
}));
const ProviderDetailTopArea = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}));
const ProviderDetailContentArea = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '80px',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px',
  [theme.breakpoints.down('sm')]: {
   
  }
}));
const ProviderDetailContentValueArea = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '260px',
  display: 'flex',
  flexDirection: 'row',
  marginTop: '10px'
}));
const ProviderDetailFooterArea = styled('div')(({ theme }) => ({
  position: 'relative',
  height: '160px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  marginTop: '10px'
}));

const InsuranceLogo = styled('img')(({ theme }) => ({
 width: 'auto',
 height: '40px',
 marginRight:'10px'
}));
const InsuranceName = styled('h4')(({ theme }) => ({
  fontSize: '18px',
  fontWeight: '700',
  marginLeft: '10px'
}));
const CurrentText = styled('label')(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '400',
  color: '#1db371'
}));
const MaxValueText = styled('span')(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '400',
  color: '#000'
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const ProviderDetail = ({name,imgUrl}) => {
  return (
    <ProviderCardArea>
        <ProviderCardInnerArea>
          <ProviderDetailTopArea>
            <InsuranceLogo src={imgUrl} />
            <InsuranceName>{name}</InsuranceName>
          
          </ProviderDetailTopArea>
          <ProviderDetailContentArea>
            <Box sx={{ flexGrow: 1 }}>
              <BorderLinearProgress variant="determinate" value={15} />
            </Box>
            <ProviderDetailContentValueArea>
              <CurrentText>{182,161.5682}
                <MaxValueText> /{'10,000,000.0000'}</MaxValueText>
              </CurrentText>
            </ProviderDetailContentValueArea>
          </ProviderDetailContentArea>
          <ProviderDetailFooterArea>
            <Button variant="contained" size="large">Stake</Button>
            <Button variant="contained" size="large">Swap</Button>
          </ProviderDetailFooterArea>
        </ProviderCardInnerArea>
    </ProviderCardArea>
    
  );
};

export default ProviderDetail;
   