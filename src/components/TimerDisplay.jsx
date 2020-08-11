import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";

const TimerDisplay = ({
  timeRemaining,
  currentRound,
  rounds,
  isWork,
  workMessage,
  breakMessage,
  intervalID,
}) => {
  const displayTime =
    timeRemaining >= 60
      ? Math.floor(timeRemaining / 60).toString()
      : `0:${timeRemaining.toString().padStart(2, "0")}`;

  useEffect(() => {
    if (displayTime.includes(":")) {
      document.title = `${
        isWork ? workMessage : breakMessage
      } | ${displayTime} to go`;
    } else {
      document.title = `${
        isWork ? workMessage : breakMessage
      } | ${displayTime} mins to go`;
    }
  });

  return (
    <>
      <Typography>{isWork ? workMessage : breakMessage}</Typography>
      <Typography variant="body1" style={{ fontSize: "50px" }}>
        {!intervalID && displayTime}
      </Typography>
      <Typography>
        Round {currentRound} of {rounds}
      </Typography>
    </>
  );
};

export default TimerDisplay;
