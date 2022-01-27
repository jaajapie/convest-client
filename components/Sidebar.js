import * as React from 'react';
import Link from 'next/link'
import styled from 'styled-components'

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function SideBar ()  {
    
    const Logo = styled.img`
    max-height: 35px;
    object-fit: cover;`

    const SideBarArea = styled(Box)(({ theme }) => ({
        backgroundColor: '#151521',
        height: '100vh',
        color:'#ffff'
    }));
    const MenuItemArea = styled(ListItem)(({ theme }) => ({
       borderTop: '1px solid #ffffff14'
    }));
    const MenuItemText = styled(ListItemText)(({ theme }) => ({
        color: '#acacac'
     }));
    const MenuHeadArea = styled(ListItem)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between'
    }));
    const MenuButtonArea = styled(MenuIcon)(({ theme }) => ({
        border: '1px solid #ffffff14',
        borderRadius: '50%',
        padding: '5px',
        fontSize: '21px',
        height: '40px',
        width: '40px'
    }));
    const [state, setState] = React.useState({ left: false });
    const anchor = 'left'
    const listMenu = (anchor) => (
        <SideBarArea sx={{ width: 250 }} role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <MenuHeadArea>
                <Link href="/" passHref> 
                    <Logo src="logo/logo-white.png"></Logo>
                </Link>
                <CloseIcon onClick={toggleDrawer(anchor, false)}></CloseIcon>
            </MenuHeadArea>
            {['Home', 'Member', 'Refferal', 'Insurance','Underwriting','Claim','Statistic','Swap'].map((text, index) => (
              <MenuItemArea button key={text}>
                <MenuItemText primary={text} />
              </MenuItemArea>
            ))}
          </List>
        </SideBarArea>
      );
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };


  return (
    <div>
        <MenuButtonArea onClick={toggleDrawer(anchor, true)}/>
            <Drawer anchor={anchor} open={state[anchor]}onClose={toggleDrawer(anchor, false)}>
                {listMenu(anchor)}
            </Drawer>
    </div>
  );
};
