import * as React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
// import Divider from '@mui/material/Divider';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import Card from '@mui/material/Card';
import ProfileFrame from "../profileframe/ProfileFrame";
// import ExapndLess from '@mui/icons-material/ExapndLess';
// import ExapndMore from '@mui/icons-material/ExapndMore';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../../assets/style/SideBar.css";

// import { Children } from 'react';
import { PageContainer } from "@toolpad/core/PageContainer";
import { Collapse, Grid, Menu } from "@mui/material";
// import Skeleton from '@mui/material/Skeleton';
import { Link, MemoryRouter, StaticRouter, BrowserRouter } from 'react-router';
import CustomizedInputBase from "../search/SearchCompo";
import CustomizedMenus from "../menuitems/MenuItem";
import LogoIcon from "../../assets/Logo.png";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import WebStoriesIcon from "@mui/icons-material/WebStories";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import GppGoodIcon from "@mui/icons-material/GppGood";

import MainPage from "../../mainPage/MainPage";
// import { SidebarItem } from './SidebarItem';

// import { Dropdown } from '@mui/base/Dropdown';
// import { Menu } from '@mui/base/Menu';
// import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
// import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
const drawerWidth = 240;

export default function SideBar() {
  const [isCollapse, setIsCollapse] = React.useState(false);
  const [homeIsCollapse, setHomeIsCollapse] = React.useState(false);
  const [pageIsCollapse, setPageIsCollapse] = React.useState(false);
  const [profileIsCollapse, setProfileIsCollapse] = React.useState(false);
  const [usersIsCollapse, setUsersIsCollapse] = React.useState(false);
  const [accountIsCollapse, setAccountIsCollapse] = React.useState(false);
  const [projectsIsCollapse, setProjectsIsCollapse] = React.useState(false);
  const [applicationsIsCollapse, setApplicationsIsCollapse] =
    React.useState(false);
  const [ecommerceIsCollapse, setEcommerceIsCollapse] = React.useState(false);
  const [prodactsIsCollapse, setProdactsIsCollapse] = React.useState(false);
  const [ordersIsCollapse, setOrdersIsCollapse] = React.useState(false);
  // const [applicationsIsCollapse,setApplicationsIsCollapse]=React.useState(false);

  const homeHandleCollapse = () => {
    setHomeIsCollapse(!homeIsCollapse);
  };
  const pageHandleCollapse = () => {
    setPageIsCollapse(!pageIsCollapse);
  };
  const profileHandleCollapse = () => {
    setProfileIsCollapse(!profileIsCollapse);
  };
  const usersHandleCollapse = () => {
    setUsersIsCollapse(!usersIsCollapse);
  };
  const accountHandleCollapse = () => {
    setAccountIsCollapse(!accountIsCollapse);
  };
  const projectsHandleCollapse = () => {
    setProjectsIsCollapse(!projectsIsCollapse);
  };
  const applicationsHandleCollapse = () => {
    setApplicationsIsCollapse(!applicationsIsCollapse);
  };
  const ecommerceHandleCollapse = () => {
    setEcommerceIsCollapse(!ecommerceIsCollapse);
  };

  const prodactsHandleCollapse = () => {
    setProdactsIsCollapse(!prodactsIsCollapse);
  };
  const ordersHandleCollapse = () => {
    setOrdersIsCollapse(!ordersIsCollapse);
  };
  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };
  return (
    <Box
      sx={{ display: "flex", bgcolor: "rgba(244, 245, 249, 1)", width: "100%" }}
    >
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: "transparent",
          height: "80px",
        }}
        style={{ paddingTop: "10px", border: "none" }}
      >
        <Toolbar style={{ gap: "140px" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ color: "rgba(110, 57, 203, 1)" }}
          >
            Permanent drawer
          </Typography>
          <CustomizedInputBase />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        position="relativ"
      >
        <div className="iconlogo">
          <div>
            <img src={LogoIcon} alt="" className="iconlogoimg" />
          </div>
        </div>
        <div className="sidbarlists">
          <nav>
            <List>
              
              <ListItem className="sidenavlist" style={{ flexDirection: "column", padding: "0" }}>
                <div className="sidebuttondiv">
                  <div className="butonleftsidediv"></div>
                  <ListItemButton
                    onClick={homeHandleCollapse}
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                      paddingLeft: "5px",
                      borderRadius: "10px",
                    }}
                  
                    sx={{
                      ":hover": {
                        bgcolor: "rgba(222, 204, 254, 1)", // theme.palette.primary.main
                      },
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "center",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <HomeIcon />
                      Home
                    </div>
                    {homeIsCollapse ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </ListItemButton >
                </div>
                <List style={{ width: "100%" }}>
                  <Collapse in={homeIsCollapse} timeout="auto" unmountOnExit>
                    <ListItem style={{ flexDirection: "column" }}>
                      
                        <ListItemButton
                        Link
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                          paddingLeft: "30px",
                        }}
                      >
                        <a href="/">
                       Dashboard 
                      </a>
                      </ListItemButton>
                    
                      <ListItemButton
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                          paddingLeft: "30px",
                        }}
                      >
                        <a href="analytics">
                        Analytics
                        </a>
                      </ListItemButton>
                    </ListItem>
                  </Collapse>
                </List>
                <div className="sidebuttondiv">
                  <div className="butonleftsidediv"></div>
                  <ListItemButton
                    onClick={pageHandleCollapse}
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                      paddingLeft: "5px",
                      borderRadius: "10px",
                    }}
                    sx={{
                      ":hover": {
                        bgcolor: "rgba(222, 204, 254, 1)", // theme.palette.primary.main
                      },
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "center",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <DescriptionIcon />
                      Pages
                    </div>
                    {pageIsCollapse ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </ListItemButton>
                </div>
                <List style={{ width: "100%", paddingLeft: "20px" }}>
                  <Collapse in={pageIsCollapse} timeout="auto" unmountOnExit>
                    <ListItem style={{ flexDirection: "column" }}>
                      <ListItemButton
                        onClick={profileHandleCollapse}
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Profile
                        {profileIsCollapse ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </ListItemButton>
                      <List style={{ width: "100%" }}>
                        <Collapse
                          in={profileIsCollapse}
                          timeout="auto"
                          unmountOnExit
                        >
                          <ListItem style={{ flexDirection: "column" }}>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                                fontSize: "14px",
                              }}
                            >  <a href="profileoverview">
                              Profile overview
                              </a>
                            </ListItemButton>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              <a href="teams">
                              Teams
                              </a>
                            </ListItemButton>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              All Projects
                            </ListItemButton>
                          </ListItem>
                        </Collapse>
                      </List>
                      <ListItemButton
                        onClick={usersHandleCollapse}
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Users
                        {usersIsCollapse ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </ListItemButton>
                      <List style={{ width: "100%" }}>
                        <Collapse
                          in={usersIsCollapse}
                          timeout="auto"
                          unmountOnExit
                        >
                          <ListItem style={{ flexDirection: "column" }}>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              Reports
                            </ListItemButton>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              New User
                            </ListItemButton>
                          </ListItem>
                        </Collapse>
                      </List>
                      <ListItemButton
                        onClick={accountHandleCollapse}
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Account
                        {accountIsCollapse ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </ListItemButton>
                      <List style={{ width: "100%" }}>
                        <Collapse
                          in={accountIsCollapse}
                          timeout="auto"
                          unmountOnExit
                        >
                          <ListItem style={{ flexDirection: "column" }}>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              Setting
                            </ListItemButton>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              Billing
                            </ListItemButton>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              Invoice
                            </ListItemButton>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              Security
                            </ListItemButton>
                          </ListItem>
                        </Collapse>
                      </List>
                      <ListItemButton
                        onClick={projectsHandleCollapse}
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Projects
                        {projectsIsCollapse ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </ListItemButton>
                      <List style={{ width: "100%" }}>
                        <Collapse
                          in={projectsIsCollapse}
                          timeout="auto"
                          unmountOnExit
                        >
                          <ListItem style={{ flexDirection: "column" }}>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              General
                            </ListItemButton>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              Timeline
                            </ListItemButton>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              New Project
                            </ListItemButton>
                          </ListItem>
                        </Collapse>
                      </List>
                      <ListItemButton
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Pricing Page
                      </ListItemButton>
                      <ListItemButton
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Charts
                      </ListItemButton>
                      <ListItemButton
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Notifcation
                      </ListItemButton>
                      <ListItemButton
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Chat
                      </ListItemButton>
                    </ListItem>
                  </Collapse>
                </List>
                <div className="sidebuttondiv">
                  <div className="butonleftsidediv"></div>
                  <ListItemButton
                    onClick={applicationsHandleCollapse}
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                      paddingLeft: "5px",
                      borderRadius: "10px",
                    }}
                    sx={{
                      ":hover": {
                        bgcolor: "rgba(222, 204, 254, 1)", // theme.palette.primary.main
                      },
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "center",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <WebStoriesIcon />
                      Applications
                    </div>
                    {applicationsIsCollapse ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </ListItemButton>
                </div>
                <List style={{ width: "100%", paddingLeft: "15px" }}>
                  <Collapse
                    in={applicationsIsCollapse}
                    timeout="auto"
                    unmountOnExit
                  >
                    <ListItem style={{ flexDirection: "column" }}>
                      <ListItemButton
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Kanban
                      </ListItemButton>
                      <ListItemButton
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Wizard
                      </ListItemButton>
                      <ListItemButton
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Data tables
                      </ListItemButton>
                      <ListItemButton
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Calender
                      </ListItemButton>
                    </ListItem>
                  </Collapse>
                </List>
                <div className="sidebuttondiv">
                  <div className="butonleftsidediv"></div>
                  <ListItemButton
                    onClick={ecommerceHandleCollapse}
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                      paddingLeft: "5px",
                      borderRadius: "10px",
                    }}
                    sx={{
                      ":hover": {
                        bgcolor: "rgba(222, 204, 254, 1)", // theme.palette.primary.main
                      },
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "center",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <ShoppingBasketIcon />
                      E-commerce
                    </div>
                    {ecommerceIsCollapse ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </ListItemButton>
                </div>
                <List style={{ width: "100%", paddingLeft: "15px" }}>
                  <Collapse
                    in={ecommerceIsCollapse}
                    timeout="auto"
                    unmountOnExit
                    style={{ flexDirection: "column" }}
                  >
                    <h5>Overview</h5>
                    <ListItem style={{ flexDirection: "column" }}>
                      <ListItemButton
                        onClick={prodactsHandleCollapse}
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Prodacts
                        {prodactsIsCollapse ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </ListItemButton>
                      <List style={{ width: "100%" }}>
                        <Collapse
                          in={prodactsIsCollapse}
                          timeout="auto"
                          unmountOnExit
                        >
                          <ListItem style={{ flexDirection: "column" }}>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              New Prodacts
                            </ListItemButton>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              Edit Prodacts
                            </ListItemButton>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              Prodacts List
                            </ListItemButton>
                          </ListItem>
                        </Collapse>
                      </List>
                      <ListItemButton
                        onClick={ordersHandleCollapse}
                        style={{
                          width: "100%",
                          justifyContent: "space-between",
                        }}
                      >
                        Orders
                        {ordersIsCollapse ? (
                          <KeyboardArrowUpIcon />
                        ) : (
                          <KeyboardArrowDownIcon />
                        )}
                      </ListItemButton>
                      <List style={{ width: "100%" }}>
                        <Collapse
                          in={ordersIsCollapse}
                          timeout="auto"
                          unmountOnExit
                        >
                          <ListItem style={{ flexDirection: "column" }}>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              Orders list
                            </ListItemButton>
                            <ListItemButton
                              style={{
                                width: "100%",
                                justifyContent: "space-between",
                              }}
                            >
                              Order Detail
                            </ListItemButton>
                          </ListItem>
                        </Collapse>
                      </List>
                    </ListItem>
                  </Collapse>
                </List>
                <div className="sidebuttondiv">
                  <div className="butonleftsidediv"></div>
                  <ListItemButton
                    onClick={handleCollapse}
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                      paddingLeft: "5px",
                      borderRadius: "10px",
                    }}
                    sx={{
                      ":hover": {
                        bgcolor: "rgba(222, 204, 254, 1)", // theme.palette.primary.main
                      },
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "center",
                        gap: "5px",
                        display: "flex",
                      }}
                    >
                      <GppGoodIcon />
                      Authentication
                    </div>
                    {isCollapse ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </ListItemButton>
                </div>
                <List style={{ width: "100%" }}>
                  <Collapse in={isCollapse} timeout="auto" unmountOnExit>
                    <ListItem>
                      <ListItemButton>Sign in</ListItemButton>
                      <ListItemButton>Log in</ListItemButton>
                    </ListItem>
                  </Collapse>
                </List>
              </ListItem>
            </List>
          </nav>
        </div>
        <div className="sidebarprofaelfram">
          <ProfileFrame />
        </div>
      </Drawer>
      <Box
        component="main"
        sx={{
          width: "100%",
          height: "100vh",
          bgsize: "cover",
          overflow: "scroll",
        }}
      >
        <PageContainer
          sx={{ width: "100%", height: "auto", paddingTop: "20px" }}
        >
          <MainPage />

          {/* <SidebarItem/>   */}
        </PageContainer>
      </Box>
    </Box>
  );
}
