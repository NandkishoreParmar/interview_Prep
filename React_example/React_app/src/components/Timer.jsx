import React, { useState, useEffect } from "react";

const TimerApp = () => {
  const [time, setTime] = useState(0); // Timer value
  const [isRunning, setIsRunning] = useState(false); // Track if the timer is running

  // Handle timer setup and cleanup using useEffect
  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    // Cleanup the interval when the timer stops or the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]); // Depend on `isRunning`

  // Start the timer
  const startTimer = () => {
    setIsRunning(true);
  };

  // Pause the timer
  const pauseTimer = () => {
    setIsRunning(false);
  };

  // Reset the timer
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Timer: {time < 10 ? "0" + time : time}</h1>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default TimerApp;