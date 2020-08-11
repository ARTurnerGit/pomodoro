import React from "react";
import { Paper, Slider, TextField } from "@material-ui/core";

const WorkSettings = ({ workDuration, setWorkDuration, rounds, setRounds }) => {
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
        value={workDuration / 60}
        marks={workDurationMarks}
        min={15}
        max={60}
        step={5}
        valueLabelDisplay="on"
        onChange={(event, value) => setWorkDuration(value * 60)}
      />
      Rounds
      <Slider
        value={rounds}
        marks={roundMarks}
        min={1}
        max={15}
        step={1}
        valueLabelDisplay="on"
        onChange={(event, value) => setRounds(value)}
      />
      Work Message
      <TextField />
    </Paper>
  );
};

export default WorkSettings;
