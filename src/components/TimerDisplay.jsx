import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";

const TimerDisplay = ({ timeRemaining }) => {
  const displayTime =
    timeRemaining >= 60
      ? Math.floor(timeRemaining / 60).toString()
      : `0:${timeRemaining.toString().padStart(2, "0")}`;

  useEffect(() => {
    document.title = `${displayTime} to go`;
  }, [displayTime]);

  return (
    <Typography variant="body1" style={{ fontSize: "50px" }}>
      {displayTime}
    </Typography>
  );
};

export default TimerDisplay;
