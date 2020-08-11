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
  isWork,
  setIsWork,
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
    setTimeRemaining(isWork ? workDuration : shortBreakDuration);
  };

  const nextRound = () => {
    stopTimer();
    if (isWork) {
      setTimeRemaining(shortBreakDuration);
    } else {
      setCurrentRound((round) => round + 1);
      setTimeRemaining(workDuration);
    }
    setIsWork((bool) => !bool);
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
        isWork={isWork}
        workMessage={workMessage}
        breakMessage={breakMessage}
        intervalID={intervalID}
      />
      <TimerControl
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetTimer={resetTimer}
        nextRound={nextRound}
        intervalID={intervalID}
      />
    </Container>
  );
};

export default Timer;
