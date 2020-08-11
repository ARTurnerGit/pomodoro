import React from "react";
import { Container, Button } from "@material-ui/core";

const TimerControl = ({ startTimer, stopTimer, resetTimer, nextRound }) => {
  return (
    <Container>
      <Button onClick={resetTimer}>RESET</Button>
      <Button onClick={startTimer}>PLAY</Button>
      <Button onClick={stopTimer}>PAUSE</Button>
      <Button onClick={nextRound}>NEXT</Button>
    </Container>
  );
};

export default TimerControl;
