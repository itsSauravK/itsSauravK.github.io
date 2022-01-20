import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Avatar,
  Button,
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogTitle,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FolderIcon from "@mui/icons-material/Folder";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import { useHistory, useLocation } from "react-router-dom";
import profilePic from "../constants/assets/profile.jpg"

import "../App.css";

const drawerWidth = 240;
const myEmailId = "ksaurav0211@gmail.com";

const useStyles = makeStyles({
  active: {
    background: "#f4f4f4",
  },
});

function Sidebar(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [openEmailDialog, setOpenEmailDialog] = useState(false);

  const menuItems = [
    {
      id: "home",
      text: "About Me",
      icon: <PersonIcon sx={{ color: "#213E40" }} />,
      path: "/",
    },
    {
      id: "projects",
      text: "Projects",
      icon: <FolderIcon sx={{ color: "#213E40" }} />,
      path: "/projects",
    },
    {
      id: "blogs",
      text: "Blogs",
      icon: <NoteAltIcon sx={{ color: "#213E40" }} />,
      path: "/blogs",
    },
  ];

  const footerItems = [
    {
      id: "LinkedIn",
      value: "LinkedIn",
      color: "#0072b1",
      icon: <LinkedInIcon sx={{ color: "#213E40" }} />,
      url: "https://www.linkedin.com/in/saurav0211/",
    },
    {
      id: "GitHub",
      value: "GitHub",
      color: "black",
      icon: <GitHubIcon sx={{ color: "#213E40" }} />,
      url: "https://github.com/itsSauravK",
    },
    {
      id: "Medium",
      value: "Medium",
      color: "purple",
      icon: <ArticleRoundedIcon sx={{ color: "#213E40" }} />,
      url: "https://medium.com/@ksaurav0211",
    },
    {
      id: "Email",
      value: "Email",
      color: "darkgreen",
      icon: <EmailIcon sx={{ color: "#213E40" }} />,
      url: "mailto:ksaurav0211@gmail.com",
    },
  ];

  const displayEmailPopUp = (
    <Dialog
      selectedValue={myEmailId}
      open={openEmailDialog}
      onClose={() => setOpenEmailDialog(false)}
    >
      <DialogTitle>
        {myEmailId}
        <Button onClick={() => setOpenEmailDialog(false)}>X</Button>
      </DialogTitle>
    </Dialog>
  );

  const drawer = (
    <div className="sidebar">
      <div className="sidebar-profile">
        <div className="sidebar-profile-image">
          <Avatar
            alt="Saurav Kumar"
            src={profilePic}
            sx={{ width: 160, height: 160 }}
          />
        </div>
        <Typography variant="h5" color="#213E40">
          Saurav Kumar
        </Typography>
        <div className="sidebar-location">
          <LocationOnIcon fontSize="small" filled="#213E40" />
          <Typography variant="body2" color="#213E40">
            Mumbai, India
          </Typography>
        </div>
      </div>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            button
            onClick={() => {
              history.push(item.path);
              props.handleSidebarItemClick(item.text);
            }}
            className={location.pathname === item.path ? classes.active : null}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} sx={{ color: "#213E40" }} />
          </ListItem>
        ))}
      </List>

      <div className="sidebar-footer">
        <Divider
          sx={{
            display: "fixed",
          }}
        />
        <BottomNavigation sx={{ width: drawerWidth }} showLabels>
          {footerItems.map((item) => (
            <BottomNavigationAction
              sx={{ width: "20px", minWidth: "20px" }}
              label={item.id}
              value={item.value}
              icon={item.icon}
              onClick={() => {
                
                  window.open(item.url, "_blank");
                
              }}
            />
          ))}
        </BottomNavigation>
        {displayEmailPopUp}
      </div>
    </div>
  );

  return (
    <>
      <Drawer
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModelProps={{
          keepMounted: true,
        }}
        anchor="left"
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { bozSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { bozSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Sidebar;
