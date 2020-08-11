import React, { useState } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Banner from "./components/Banner";
import Timer from "./components/Timer";
import Settings from "./components/Settings";

function App() {
  const [workDuration, setWorkDuration] = useState(25 * 60);
  const [rounds, setRounds] = useState(5);
  const [shortBreakDuration, setShortBreakDuration] = useState(5 * 60);
  const [longBreakDuration, setLongBreakDuration] = useState(20 * 60);
  const [workMessage, setWorkMessage] = useState("Work");
  const [breakMessage, setBreakMessage] = useState("Break");

  return (
    <div className="App">
      <header>
        <Banner />
      </header>
      <main>
        <Router>
          <Timer
            path="/timer"
            workDuration={workDuration}
            rounds={rounds}
            shortBreakDuration={shortBreakDuration}
            longBreakDuration={longBreakDuration}
            workMessage={workMessage}
            breakMessage={breakMessage}
            default
          />
          <Settings
            path="/settings"
            workDuration={workDuration}
            setWorkDuration={setWorkDuration}
            rounds={rounds}
            setRounds={setRounds}
            shortBreakDuration={shortBreakDuration}
            setShortBreakDuration={setShortBreakDuration}
            longBreakDuration={longBreakDuration}
            setLongBreakDuration={setLongBreakDuration}
            workMessage={workMessage}
            setWorkMessage={setWorkMessage}
            breakMessage={breakMessage}
            setBreakMessage={setBreakMessage}
          />
        </Router>
      </main>
    </div>
  );
}

export default App;
