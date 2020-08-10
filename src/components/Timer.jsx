import React from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControl from "./TimerControl";
import { Container } from "@material-ui/core";

const Timer = () => {
  return (
    <Container>
      Hi there I'm the Timer and I'm going to render...
      <TimerDisplay />
      <TimerControl />
    </Container>
  );
};

export default Timer;
