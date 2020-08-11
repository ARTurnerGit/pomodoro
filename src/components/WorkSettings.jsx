import React, { useState } from "react";
import { Paper, Slider, TextField } from "@material-ui/core";

const WorkSettings = () => {
  const [workDuration, setWorkDuration] = useState(25 * 60);
  const workDurationMarks = [
    { value: 15, label: "15 mins" },
    { value: 25, label: "25 mins" },
    { value: 60, label: "1 hour" },
  ];
  const roundMarks = [
    { value: 1, label: "1" },
    { value: 5, label: "5" },
    { value: 15, label: "15" },
  ];
  return (
    <Paper style={{ width: "40%", margin: "4vh 0" }}>
      Work Duration
      <Slider
        defaultValue="25"
        marks={workDurationMarks}
        min={15}
        max={60}
        step={5}
        valueLabelDisplay="on"
      />
      Rounds
      <Slider
        defaultValue="5"
        marks={roundMarks}
        min={1}
        max={15}
        step={1}
        valueLabelDisplay="on"
      />
      Work Message
      <TextField />
    </Paper>
  );
};

export default WorkSettings;
