import React from "react";
import homeImage from "../constants/assets/homepagefinal.jpeg";
import { Paper, Typography } from "@mui/material";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import "../App.css";

const styles = {
  paperContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.54)",
    margin: "-24px",
    backgroundSize: "cover",
    backgroundImage: `url(${homeImage})`,
    height: "100vh",
    width: "100hv",
    display: "flex",
    paddingLeft: "100px",
    paddingRight: "100px",
  },
};

function Home() {
  return (
    <Paper style={styles.paperContainer}>
      <div className="home-content">
        <Typography variant="h5" color="black" align="center">
          Hi, I’m a Computer Science student{" "}
          <SchoolRoundedIcon fontSize="small" sx={{ color: "black" }} />,
          passionate to learn new technologies. I’m a sporadic blogger, an avid
          reader{" "}
          <MenuBookRoundedIcon fontSize="small" sx={{ color: "black" }} />, a
          Manga fan and love to sketch{" "}
          <CreateRoundedIcon fontSize="small" sx={{ color: "black" }} />
          whenever I’m free. Do reach out on LinkedIn or via email if you want
          to connect.
        </Typography>
      </div>
    </Paper>
  );
}

export default Home;
