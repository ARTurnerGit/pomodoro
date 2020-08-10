import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Banner from "./components/Banner";
import Timer from "./components/Timer";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <header>
        <Banner />
      </header>
      <main>
        <Router>
          <Timer path="/timer" default />
          <Settings path="/settings" />
        </Router>
      </main>
    </div>
  );
}

export default App;
