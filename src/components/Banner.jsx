import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <AppBar style={{ position: "static" }}>
      <Toolbar>
        <em>logo goes here</em>
        <Navbar />
        And then a login button (later on)
      </Toolbar>
    </AppBar>
  );
};

export default Banner;
