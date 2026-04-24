import React from "react";
import "../App.css";
import Header from "./Header";
import Enquirybox from "./Enquirybox";
import Destination from "./Destination ";
import Holiday from "./Holiday";
import Demo from "./Demo";
import About from "./About";
import Adventure from "./Adventure";
import Ratings from "./Ratings";
import Footer from "./Footer";
import { Grid } from "@mui/material";

function Home() {
  return (
    <Grid sx={{ overflowX: "hidden" }}>

      <div id="home">
        <Header />
        <Enquirybox />
      </div>

      <div id="destinations">
        <Destination />
      </div>

      
<Demo />
      <div id="adventures">
        <Adventure />
      </div>
<Holiday />
<div id="about">
        
        <About/>
      </div>

      
      <div id="login">
        <Ratings />
      </div>

      <div id="contact">
        <Footer />
      </div>

    </Grid>
  );
}

export default Home;