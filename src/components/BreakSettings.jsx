import React from "react";
import { Paper, Slider, TextField } from "@material-ui/core";

const BreakSettings = () => {
  const shortBreakMarks = [
    { value: 5, label: "5 mins" },
    { value: 10, label: "10 mins" },
    { value: 20, label: "20 mins" },
    { value: 30, label: "30 mins" },
  ];
  const longBreakMarks = [
    { value: 10, label: "10 mins" },
    { value: 20, label: "20 mins" },
    { value: 40, label: "40 mins" },
    { value: 60, label: "1 hour" },
  ];
  return (
    <Paper style={{ width: "40%", margin: "4vh 0" }}>
      Short Break Duration
      <Slider
        defaultValue="5"
        marks={shortBreakMarks}
        min={5}
        max={30}
        step={1}
        valueLabelDisplay="on"
      />
      Long Break Duration
      <Slider
        defaultValue="20"
        marks={longBreakMarks}
        min={10}
        max={60}
        step={1}
        valueLabelDisplay="on"
      />
      Break Message
      <TextField />
    </Paper>
  );
};

export default BreakSettings;
