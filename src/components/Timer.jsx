import React, { useState, useRef } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControl from "./TimerControl";
import { Container } from "@material-ui/core";

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);
  const intervalID = useRef(null);

  const timerFunction = () => {
    if (timeRemaining > 1) {
      setTimeRemaining(() => timeRemaining - 1);
    } else {
      stopTimer();
    }
  };

  const startTimer = () => {
    intervalID.current = setInterval(timerFunction, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalID.current);
    intervalID.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTimeRemaining(25 * 60);
  };

  return (
    <Container style={{ position: "absolute", top: "40vh" }}>
      <TimerDisplay timeRemaining={timeRemaining} />
      <TimerControl startTimer={startTimer} stopTimer={stopTimer} />
    </Container>
  );
};

export default Timer;
