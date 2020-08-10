import React from "react";
import { Paper, Slider, TextField } from "@material-ui/core";

const WorkSettings = () => {
  return (
    <Paper style={{ width: "40%", margin: "4vh 0" }}>
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
