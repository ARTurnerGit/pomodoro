import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      LET'S MAKE A POMODORO
      <Banner />
      <Navbar />
      <Timer />
      <Settings />
    </div>
  );
}

export default App;
