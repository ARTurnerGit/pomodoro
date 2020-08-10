import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <AppBar
      style={{
        position: "static",
      }}
    >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <em>logo goes here</em>
        <Navbar />
      </Toolbar>
    </AppBar>
  );
};

export default Banner;
