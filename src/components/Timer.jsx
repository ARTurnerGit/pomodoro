import React, { useState } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControl from "./TimerControl";
import { Container } from "@material-ui/core";

const Timer = () => {
  const [timeRemaining, setTimeRemaining] = useState(25 * 60);

  return (
    <Container style={{ position: "absolute", top: "40vh" }}>
      <TimerDisplay timeRemaining={timeRemaining} />
      <TimerControl />
    </Container>
  );
};

export default Timer;
