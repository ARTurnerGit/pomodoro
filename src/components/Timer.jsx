import React, { useState, useRef, useEffect } from "react";
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
}) => {
  const [timeRemaining, setTimeRemaining] = useState(workDuration);
  const intervalID = useRef(null);

  useEffect(() => {
    if (timeRemaining === 0) {
      stopTimer();
    }
  }, [timeRemaining]);

  const startTimer = () => {
    intervalID.current = setInterval(
      () => setTimeRemaining((time) => time - 1),
      1000
    );
  };

  const stopTimer = () => {
    clearInterval(intervalID.current);
    intervalID.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTimeRemaining(5); // this needs to change to workDuration, 5s for testing
  };

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
      />
    </Container>
  );
};

export default Timer;
