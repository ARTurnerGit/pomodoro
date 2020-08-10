import React from "react";
import { Container, Button } from "@material-ui/core";

const TimerControl = ({ startTimer, stopTimer }) => {
  return (
    <Container>
      <Button>RESET</Button>
      <Button onClick={startTimer}>PLAY</Button>
      <Button onClick={stopTimer}>PAUSE</Button>
      <Button>SKIP</Button>
    </Container>
  );
};

export default TimerControl;
