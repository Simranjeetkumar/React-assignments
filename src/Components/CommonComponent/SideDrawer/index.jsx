import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MuiAccountCircleIcon, MuiGroupAddIcon, MuiHomeIcon, MuiManageAccountsIcon, MuiNotificationsNoneOutlinedIcon, MuiPersonIcon, MuiRateReviewOutlinedIcon, MuiReplyOutlinedIcon, MuiSettingsOutlinedIcon, MuiSubscriptionsOutlinedIcon, MuiVaccinesIcon } from '../../Mui-Icons';
import { MuiBox } from '../../Mui-Component';
import CustomizedMenus from '../CustomizedMenu';
import DashBoard from '../../Ui-Components/DashBoard';
import { NavLink } from 'react-router-dom';
import img1 from '../../../assets/logo.svg'

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window,content } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const listItem = [
    {item:'DashBoard',icon:<MuiHomeIcon className='Notification hoverIcon'/>,
    path:'DashBoard',
    // path:'/admin/DashBoard'
  },
    {item:'Admin Users',icon:<MuiManageAccountsIcon className='Notification hoverIcon'/>,
    path:'AdminUsers',
    // path:'/admin/DashBoard'
  },
    {item:'HCP Users',icon:<MuiGroupAddIcon className='Notification hoverIcon'/>,path:'HCPUsers'},
    {item:'Pharma Companies',icon:<MuiVaccinesIcon className='Notification hoverIcon'/>,path:'PharmaCompanies'},
    {item:'Pharma Users',icon:<MuiPersonIcon className='Notification hoverIcon'/>,path:'PharmaUsers'},
    {item:'Content',icon:<MuiRateReviewOutlinedIcon className='Notification hoverIcon'/>,path:'manage-content'},
    {item:'Series',icon:<MuiSubscriptionsOutlinedIcon className='Notification hoverIcon'/>,path:'Series'},
    {item:'MetaData',icon:<MuiReplyOutlinedIcon className='Notification hoverIcon'/>,path:'MetaData'},
    {item:'Static Data',icon:<MuiSettingsOutlinedIcon className='Notification hoverIcon'/>,path:'StaticData'},
    {item:'Notification',icon:<MuiNotificationsNoneOutlinedIcon className='Notification hoverIcon'/>,path:'Notification'},
  ]

  const drawer = (
    <div >
      
      <Toolbar>
        <img src={img1}  className='mLogo'alt="" />
      </Toolbar>
      
      <Divider />
      
      <List>
        {listItem.map((text, index) => (
          <ListItem  key={text.item} disablePadding>
            <NavLink className='navLink accountBtn1' to={text.path}>
            <ListItemButton className='DrawerItem'>
              {/* <ListItemIcon> */}
                {text.icon}
              {/* </ListItemIcon> */}
              <ListItemText className='listItem UserItem' primary={text.item} />
            </ListItemButton>
          </NavLink>
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
        className='AppBar'
      >
        <Toolbar className='sideBarNav'>
          <IconButton
            color="white"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon className='accountBtn1' />
          </IconButton >
          <MuiBox><MuiNotificationsNoneOutlinedIcon className='Notification'/></MuiBox>
          <MuiBox><MuiAccountCircleIcon className='Notification'/></MuiBox>
          <MuiBox><CustomizedMenus /></MuiBox>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,background:'#0D203A', color:'white' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          className='sideContentPaper'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,background:'#0D203A', color:'white' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
      className='DrawerContent' id='drawerMain'
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {content}
       
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
