import React from "react";
import { Container, Button } from "@material-ui/core";

const TimerControl = () => {
  return (
    <Container>
      <Button>RESET</Button>
      <Button>PLAY/PAUSE</Button>
      <Button>SKIP</Button>
    </Container>
  );
};

export default TimerControl;
