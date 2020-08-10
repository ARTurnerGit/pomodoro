import React, { useState } from "react";
import { Paper, Slider, TextField } from "@material-ui/core";

const WorkSettings = () => {
  const [workDuration, setWorkDuration] = useState(25 * 60);
  const marks = [
    { value: 5, label: "5 mins" },
    { value: 25, label: "25 mins" },
    { value: 60, label: "1 hour" },
  ];
  return (
    <Paper style={{ width: "40%", margin: "4vh 0" }}>
      Work Duration
      <Slider
        defaultValue="25"
        marks={marks}
        min={5}
        max={60}
        step={5}
        valueLabelDisplay="on"
      />
      Rounds
      <Slider />
      Work Message
      <TextField />
    </Paper>
  );
};

export default WorkSettings;
