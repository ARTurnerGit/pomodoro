import React from "react";
import WorkSettings from "./WorkSettings";
import BreakSettings from "./BreakSettings";
import { Container } from "@material-ui/core";

const Settings = () => {
  return (
    <Container>
      Hi there I'm the Settings and I'm going to render...
      <WorkSettings />
      <BreakSettings />
    </Container>
  );
};

export default Settings;
