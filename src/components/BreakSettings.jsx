import React from "react";
import { Paper, Slider, TextField } from "@material-ui/core";

const BreakSettings = ({
  shortBreakDuration,
  setShortBreakDuration,
  longBreakDuration,
  setLongBreakDuration,
  breakMessage,
  setBreakMessage,
}) => {
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
        value={shortBreakDuration / 60}
        marks={shortBreakMarks}
        min={5}
        max={30}
        step={1}
        valueLabelDisplay="on"
        onChange={(event, value) => {
          setShortBreakDuration(value * 60);
        }}
      />
      Long Break Duration
      <Slider
        value={longBreakDuration / 60}
        marks={longBreakMarks}
        min={10}
        max={60}
        step={1}
        valueLabelDisplay="on"
        onChange={(event, value) => {
          setLongBreakDuration(value * 60);
        }}
      />
      <TextField
        variant="outlined"
        label="Break Message"
        value={breakMessage}
        onChange={(e) => {
          setBreakMessage(e.target.value);
        }}
      />
    </Paper>
  );
};

export default BreakSettings;
