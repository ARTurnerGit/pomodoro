import React from "react";
import WorkSettings from "./WorkSettings";
import BreakSettings from "./BreakSettings";
import { Container } from "@material-ui/core";

const Settings = () => {
  return (
    <Container>
      <WorkSettings />
      <BreakSettings />
    </Container>
  );
};

export default Settings;
