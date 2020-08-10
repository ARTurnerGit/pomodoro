import React from "react";
import { Typography } from "@material-ui/core";

const TimerDisplay = ({ timeRemaining }) => {
  return (
    <Typography variant="body1" style={{ fontSize: "50px" }}>
      {timeRemaining}
    </Typography>
  );
};

export default TimerDisplay;
