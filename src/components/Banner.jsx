import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <AppBar>
      <Toolbar>
        This is the Banner ---> Logo, these nav elements -->
        <Navbar />
        And then a login button (later on)
      </Toolbar>
    </AppBar>
  );
};

export default Banner;
