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
      ? `${Math.floor(timeRemaining / 60).toString()} mins`
      : `0:${timeRemaining.toString().padStart(2, "0")}`;

  useEffect(() => {
    document.title = `${
      isWork ? workMessage : breakMessage
    } | ${displayTime} to go`;
  });

  return (
    <>
      <Typography>{isWork ? workMessage : breakMessage}</Typography>
      <Typography variant="body1" style={{ fontSize: "50px" }}>
        {displayTime}
      </Typography>
      <Typography>
        {currentRound <= rounds
          ? `Round ${currentRound} of ${rounds}`
          : "Rounds complete"}
      </Typography>
    </>
  );
};

export default TimerDisplay;
