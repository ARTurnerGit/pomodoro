import React from "react";
import WorkSettings from "./WorkSettings";
import BreakSettings from "./BreakSettings";
import { Container } from "@material-ui/core";

const Settings = () => {
  return (
    <Container
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <WorkSettings />
      <BreakSettings />
    </Container>
  );
};

export default Settings;
