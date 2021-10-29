import React, { useState } from "react";
// import { makeStyles } from "@mui/styles";
import Sidebar from "./Sidebar";
import PageContent from "./PageContent";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

// const useStyles = makeStyles({
//   page: {
//     background: "#f9f9f9",
//     width: "100%",
//   },
//   drawer: {
//     width: drawerWidth,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   root: {
//     display: "flex",
//   },
// });

function Layout({ children }) {
  //   const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeText, setActiveText] = useState("About Me");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSidebarItemClick = (text) => {
    setActiveText(text);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          display: { xs: "block", sm: "none" },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {activeText}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Sidebar
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          handleSidebarItemClick={handleSidebarItemClick}
        />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#e7e6e4",
        }}
      >
        <Toolbar
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },  //To prevent overlapping of content when screen is small 
            display: { xs: "block", sm: "none" },
          }}
        />
        <PageContent content={children} />
      </Box>
    </Box>
  );
}

export default Layout;
