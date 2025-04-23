import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import ExapndLess from '@mui/icons-material/ExapndLess';
// import ExapndMore from '@mui/icons-material/ExapndMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import '../../assets/style/SideBar.css'

import { Children } from 'react';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Collapse, Grid } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import DashboardPage from '../../pages/home/dashboardPage/DashboardPage';
import CustomizedInputBase from '../search/SearchCompo';
import CustomizedMenus from '../menuitems/MenuItem';
const drawerWidth = 200;


export default function SideBar() {
  const [isCollapse,setIsCollapse]=React.useState(false);
  const [homeIsCollapse,setHomeIsCollapse]=React.useState(false);
  const [pageIsCollapse,setPageIsCollapse]=React.useState(false);
  const [profileIsCollapse,setProfileIsCollapse]=React.useState(false);
  const [usersIsCollapse,setUsersIsCollapse]=React.useState(false);
  const [accountIsCollapse,setAccountIsCollapse]=React.useState(false);
  const [projectsIsCollapse,setProjectsIsCollapse]=React.useState(false);
  const [applicationsIsCollapse,setApplicationsIsCollapse]=React.useState(false);
  const [ecommerceIsCollapse,setEcommerceIsCollapse]=React.useState(false);
  const [prodactsIsCollapse,setProdactsIsCollapse]=React.useState(false);
  const [ordersIsCollapse,setOrdersIsCollapse]=React.useState(false);
  // const [applicationsIsCollapse,setApplicationsIsCollapse]=React.useState(false);


  const homeHandleCollapse=()=>{
    setHomeIsCollapse(!homeIsCollapse);
  }
  const pageHandleCollapse=()=>{
    setPageIsCollapse(!pageIsCollapse)
  }
  const profileHandleCollapse=()=>{
    setProfileIsCollapse(!profileIsCollapse)
  }
  const usersHandleCollapse=()=>{
    setUsersIsCollapse(!usersIsCollapse)
  }
  const accountHandleCollapse=()=>{
    setAccountIsCollapse(!accountIsCollapse)
  }
  const projectsHandleCollapse=()=>{
    setProjectsIsCollapse(!projectsIsCollapse)
  }
  const applicationsHandleCollapse=()=>{
    setApplicationsIsCollapse(!applicationsIsCollapse)
  } 
  const ecommerceHandleCollapse=()=>{
    setEcommerceIsCollapse(!ecommerceIsCollapse)
  } 

  const prodactsHandleCollapse=()=>{
    setProdactsIsCollapse(!prodactsIsCollapse)
  }
   const ordersHandleCollapse=()=>{
    setOrdersIsCollapse(!ordersIsCollapse)
  }
  const handleCollapse=()=>{
    setIsCollapse(!isCollapse);
  }
  return (
    <Box sx={{ display: 'flex',bgcolor:'rgba(244, 245, 249, 1)',width:"100%" }}>
      <CssBaseline />
      <AppBar elevation={0}
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` ,bgcolor:'transparent',height:"80px"}}
      style={{paddingTop:'10px',border:"none",}}>
        <Toolbar style={{gap:'140px'}}>
          <Typography variant="h6" noWrap component="div" style={{color:'rgba(110, 57, 203, 1)'}}>
            Permanent drawer
                    
          </Typography>
          <CustomizedInputBase/> 
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },

        }}
        variant="permanent"
        anchor="left"
      >
        <div className='iconlogo'>

        </div>
        <List>
          <ListItem style={{flexDirection:'column'}}>
            <ListItemButton onClick={homeHandleCollapse} style={{gap:'100px'}}>
              Home
              {homeIsCollapse ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/> }
            </ListItemButton>
            <List>
            <Collapse in={homeIsCollapse} timeout='auto' unmountOnExit>
          <ListItem style={{flexDirection:'column'}}>
            <ListItemButton>
              Dashboard
            </ListItemButton>
            <ListItemButton>
              Analytics
            </ListItemButton>
          </ListItem>
          </Collapse>
            </List>
            <ListItemButton onClick={pageHandleCollapse} style={{gap:'100px'}}>
              Pages
              {pageIsCollapse ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/> }
            </ListItemButton>
            <List>
            <Collapse in={pageIsCollapse} timeout='auto' unmountOnExit>
          <ListItem style={{flexDirection:'column'}}>
            <ListItemButton onClick={profileHandleCollapse} style={{gap:'60px'}}>
              Profile
              {profileIsCollapse ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/> }
            </ListItemButton>
            <List>
              <Collapse in={profileIsCollapse} timeout='auto' unmountOnExit>
          <ListItem style={{flexDirection:'column'}}>
              <ListItemButton>
              Profile overview
            </ListItemButton>
            <ListItemButton>
              Teams
            </ListItemButton>
            <ListItemButton>
              All Projects
            </ListItemButton>
              </ListItem>
              </Collapse>
            </List>
            <ListItemButton onClick={usersHandleCollapse} style={{gap:'60px'}}>
              Users
              {usersIsCollapse ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/> }
            </ListItemButton>
            <List>
            <Collapse in={usersIsCollapse} timeout='auto' unmountOnExit>
          <ListItem style={{flexDirection:'column'}}>
              <ListItemButton>
              Reports
            </ListItemButton>
            <ListItemButton>
              New User
            </ListItemButton>
          
              </ListItem>
              </Collapse>
            </List>
            <ListItemButton onClick={accountHandleCollapse} style={{gap:'60px'}}>
              Account
              {accountIsCollapse ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/> }
            </ListItemButton>
            <List>
            <Collapse in={accountIsCollapse} timeout='auto' unmountOnExit>
          <ListItem style={{flexDirection:'column'}}>
              <ListItemButton>
              Setting
            </ListItemButton>
            <ListItemButton>
              Billing
            </ListItemButton>
            <ListItemButton>
              Invoice
            </ListItemButton>
            <ListItemButton>
              Security
            </ListItemButton>
          
              </ListItem>
              </Collapse>
            </List>
            <ListItemButton onClick={projectsHandleCollapse} style={{gap:'60px'}}>
              Projects
              {projectsIsCollapse ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/> }
            </ListItemButton>
            <List>
            <Collapse in={projectsIsCollapse} timeout='auto' unmountOnExit>
          <ListItem style={{flexDirection:'column'}}>
              <ListItemButton>
              General
            </ListItemButton>
            <ListItemButton>
              Timeline
            </ListItemButton>
            <ListItemButton>
              New Project
            </ListItemButton>
           
              </ListItem>
              </Collapse>
            </List>
            <ListItemButton>
              Pricing Page
            </ListItemButton>
            <ListItemButton>
              Charts
            </ListItemButton>
            <ListItemButton>
              Notifcation
            </ListItemButton>
            <ListItemButton>
              Chat
            </ListItemButton>
          </ListItem>
          </Collapse>
            </List>
            <ListItemButton onClick={applicationsHandleCollapse}  style={{gap:'60px'}}>
              Applications
              {applicationsIsCollapse ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/> }
            </ListItemButton>
            <List>
            <Collapse in={applicationsIsCollapse} timeout='auto' unmountOnExit>
          <ListItem style={{flexDirection:'column'}}>
            <ListItemButton>
              Kanban
            </ListItemButton>
            <ListItemButton>
              Wizard
            </ListItemButton>
            <ListItemButton>
              Data tables
            </ListItemButton>
            <ListItemButton>
              Calender
            </ListItemButton>
          </ListItem>
          </Collapse>
            </List>
            <ListItemButton onClick={ecommerceHandleCollapse} style={{gap:'20px'}} >
              E-commerce
              {ecommerceIsCollapse ? <KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/> }
            </ListItemButton>
           
            <List>
            <Collapse in={ecommerceIsCollapse} timeout='auto' unmountOnExit style={{flexDirection:'column'}}>
            <h5>Overview</h5>
          <ListItem  style={{flexDirection:'column'}}>
          <ListItemButton onClick={prodactsHandleCollapse} style={{gap:'60px'}} >
              Prodacts
              {prodactsIsCollapse ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/> }
            </ListItemButton>
            <List>
            <Collapse in={prodactsIsCollapse} timeout='auto' unmountOnExit>
          <ListItem style={{flexDirection:'column'}}>
              <ListItemButton>
              New Prodacts
            </ListItemButton>
            <ListItemButton>
              Edit Prodacts
            </ListItemButton>
            <ListItemButton>
              Prodacts List
            </ListItemButton>
           
              </ListItem>
              </Collapse>
            </List>
            <ListItemButton onClick={ordersHandleCollapse} style={{gap:'60px'}} >
              Orders
              {ordersIsCollapse ? <KeyboardArrowUpIcon/>:<KeyboardArrowDownIcon/> }
            </ListItemButton>
            <List>
            <Collapse in={ordersIsCollapse} timeout='auto' unmountOnExit>
          <ListItem style={{flexDirection:'column'}}>
              <ListItemButton>
              Orders list
            </ListItemButton>
            <ListItemButton>
              Order Detail
            </ListItemButton>
           
           
              </ListItem>
              </Collapse>
            </List>
          </ListItem>
          </Collapse>
            </List>
            <ListItemButton onClick={handleCollapse}>
              Authentication
              {isCollapse ? <KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/> }
            </ListItemButton>
            <List>
            <Collapse in={isCollapse} timeout='auto' unmountOnExit>
          <ListItem>
            <ListItemButton>
              Sign in 
            </ListItemButton>
            <ListItemButton>
              Log in
            </ListItemButton>
          </ListItem>
          </Collapse>
            </List>
          </ListItem>
         
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{width:'100%', height:'100vh',bgsize:"cover",overflow:"scroll"}}
      > 
       <PageContainer  sx={{width:'100%', height:'auto',paddingTop:'20px' }}>
       <DashboardPage/>
        </PageContainer>
      </Box>
    </Box>
  );
}
