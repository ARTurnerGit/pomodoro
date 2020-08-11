import React from "react";
import WorkSettings from "./WorkSettings";
import BreakSettings from "./BreakSettings";
import { Container } from "@material-ui/core";

const Settings = ({
  workDuration,
  setWorkDuration,
  rounds,
  setRounds,
  shortBreakDuration,
  setShortBreakDuration,
  longBreakDuration,
  setLongBreakDuration,
}) => {
  return (
    <Container
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <WorkSettings
        workDuration={workDuration}
        setWorkDuration={setWorkDuration}
        rounds={rounds}
        setRounds={setRounds}
      />
      <BreakSettings
        shortBreakDuration={shortBreakDuration}
        setShortBreakDuration={setShortBreakDuration}
        longBreakDuration={longBreakDuration}
        setLongBreakDuration={setLongBreakDuration}
      />
    </Container>
  );
};

export default Settings;
