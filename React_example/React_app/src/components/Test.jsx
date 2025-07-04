import React, { useEffect, useState } from "react";

const Test = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setisRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevtime) => prevtime + 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const StartTimer = ()=> {
    setisRunning(true);
  }
  const StopTimer = ()=> {
    setisRunning(false);
  }
  const ResetTimer = ()=> {
    setisRunning(false);
    setTimer(0);
  }
  return (
    <>
      <h1>Timer</h1>
      <p>Timer : {timer<10?"0" + timer:timer}</p>
      <button onClick={StartTimer}>Start</button>
      <button onClick={StopTimer}>Pause</button>
      <button onClick={ResetTimer}>Reset</button>
      <hr></hr>
    </>
  );
};

export default Test;
