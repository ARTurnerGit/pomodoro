import React from "react";
import { Paper, Slider, TextField } from "@material-ui/core";

const WorkSettings = () => {
  return (
    <Paper>
      Work Duration
      <Slider />
      Rounds
      <Slider />
      Work Message
      <TextField />
    </Paper>
  );
};

export default WorkSettings;
