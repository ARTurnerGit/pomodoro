import React, { useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControl from "./TimerControl";
import { Container } from "@material-ui/core";

const Timer = ({
  workDuration,
  rounds,
  shortBreakDuration,
  longBreakDuration,
  workMessage,
  breakMessage,
  currentRound,
  setCurrentRound,
  timeRemaining,
  setTimeRemaining,
  intervalID,
  setIntervalID,
}) => {
  const startTimer = () => {
    const currentIntervalID = setInterval(
      () => setTimeRemaining((time) => time - 1),
      1000
    );
    setIntervalID(currentIntervalID);
  };

  const stopTimer = () => {
    clearInterval(intervalID);
    setIntervalID(null);
  };

  const resetTimer = () => {
    stopTimer();
    setTimeRemaining(5); // this needs to change to workDuration, 5s for testing
  };

  const nextRound = () => {
    resetTimer();
    setCurrentRound((round) => round + 1);
  };

  useEffect(() => {
    if (timeRemaining === 0) {
      stopTimer();
    }
  });

  return (
    <Container style={{ position: "absolute", top: "40vh" }}>
      <TimerDisplay
        timeRemaining={timeRemaining}
        currentRound={currentRound}
        rounds={rounds}
      />
      <TimerControl
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        nextRound={nextRound}
      />
    </Container>
  );
};

export default Timer;
