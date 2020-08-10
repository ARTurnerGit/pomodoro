import React from "react";
import { Box, Button } from "@material-ui/core";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <Box>
      <Link to="/timer">
        <Button>TIMER</Button>
      </Link>
      <Link to="/settings">
        <Button>SETTINGS</Button>
      </Link>
    </Box>
  );
};

export default Navbar;
