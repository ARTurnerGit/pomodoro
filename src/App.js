import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Banner from "./components/Banner";
import Timer from "./components/Timer";
import Settings from "./components/Settings";

function App() {
  // state for settings, this contains the defaults
  const [workDuration, setWorkDuration] = useState(5); //25 min
  const [rounds, setRounds] = useState(5);
  const [shortBreakDuration, setShortBreakDuration] = useState(2); //5 min
  const [longBreakDuration, setLongBreakDuration] = useState(10); //20 min
  const [workMessage, setWorkMessage] = useState("Work");
  const [breakMessage, setBreakMessage] = useState("Break");

  // state for functional logic
  const [timeRemaining, setTimeRemaining] = useState(workDuration);
  const [intervalID, setIntervalID] = useState(null);
  const [currentRound, setCurrentRound] = useState(1);
  const [isWork, setIsWork] = useState(true);

  const audioRef = useRef(null);

  const stopTimer = () => {
    clearInterval(intervalID);
    setIntervalID(null);
  };

  useEffect(() => {
    if (timeRemaining === 0) {
      stopTimer();
      audioRef.current.play();
    }
  });

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
            currentRound={currentRound}
            setCurrentRound={setCurrentRound}
            timeRemaining={timeRemaining}
            setTimeRemaining={setTimeRemaining}
            intervalID={intervalID}
            setIntervalID={setIntervalID}
            isWork={isWork}
            setIsWork={setIsWork}
            stopTimer={stopTimer}
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
        <audio
          preload="auto"
          src={`${process.env.PUBLIC_URL}/assets/bell_sound.wav`}
          ref={audioRef}
        />
      </main>
    </div>
  );
}

export default App;
