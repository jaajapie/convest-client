import React, { useEffect, useState } from 'react';
import useGetProvider from '../../../hooks/useGetProvider'

import useGetInsurance from '../../../hooks/useGetInsurance'

import ProviderDetail from './ProviderDetail'



import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const ProviderArea = styled('div')(({ theme }) => ({
  marginTop: '2%',
  height: '100vh',
  width:'100%',
  display: 'flex',
  justifyContent: 'center',
  paddingLeft: '16px',
  paddingRight: '16px'
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CreateTabProvider =  ()  => {
 
  
  const providerData =  useGetProvider();
  const insuranceData =  useGetInsurance();
  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  if(providerData != undefined && insuranceData != undefined && value != undefined) {
    
    return (
      <>
     
       <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        
        {providerData.map((provider,index) => (
            <Tab key={index} label={provider.productType} {...a11yProps({index})} />
        ))}

     </Tabs>
      {providerData.map((provider,panelIndex) => (
          <TabPanel key={panelIndex} value={value} index={panelIndex}>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {insuranceData.map((insurance,indexInsurance) => (
                <Grid key={insurance.id} item xs={12} md={3}>
                  <ProviderDetail Id={value??0} name={insurance.name} imgUrl={insurance.logoUrl}></ProviderDetail>
                </Grid>
                  
              ))}
            </Grid>
          </Box>
        </TabPanel>
      ))}
      
      </>
     
    )
  }
  else{
    return <><p>No data</p></>
  }
}
const MainContent =  () => {
   
    return (

    <ProviderArea >
     
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <CreateTabProvider></CreateTabProvider>
      </Box>
    
    </ProviderArea>


    );
};

export default MainContent;
