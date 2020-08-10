import React from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControl from "./TimerControl";
import { Container } from "@material-ui/core";

const Timer = () => {
  return (
    <Container>
      <TimerDisplay />
      <TimerControl />
    </Container>
  );
};

export default Timer;
