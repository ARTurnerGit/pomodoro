import React from "react";
import { Paper, Slider, TextField } from "@material-ui/core";

const BreakSettings = () => {
  return (
    <Paper style={{ width: "40%", margin: "4vh 0" }}>
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
