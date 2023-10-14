import { useEffect, useState } from "react";

const useTimer = (time = 5) => {
  const [minutes, setMinutes] = useState(time);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    if (seconds === -1) {
      setSeconds(59);
      setMinutes((minutes) => minutes - 1);
    }

    if (minutes === 0 && seconds === 0) {
      setSeconds(59);
      setMinutes(time - 1);
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes, time]);

  return {
    minutes,
    seconds,
  };
};

export default useTimer;
