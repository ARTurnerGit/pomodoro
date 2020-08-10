import React from "react";
import { Paper, Slider, TextField } from "@material-ui/core";

const BreakSettings = () => {
  return (
    <Paper>
      Short Break Duration
      <Slider />
      Long Break Duration
      <Slider />
      Break Message
      <TextField />
    </Paper>
  );
};

export default BreakSettings;
