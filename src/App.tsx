import { useEffect, useState } from "react";

import Screen from "./components/Screen";
import useTimer from "./hooks/useTimer";

import data from "./data/words.json";

function App() {
  const [words, setWords] = useState(data);
  const [solution, setSolution] = useState<string | null>(null);
  const { minutes, seconds } = useTimer();

  useEffect(() => {
    getWord();
  }, []);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      getWord();
    }
  }, [minutes, seconds]);

  function getWord() {
    setWords(words.filter((word) => word !== solution));

    const randomSolution = words[Math.floor(Math.random() * words.length)];

    setSolution(randomSolution);
  }

  return (
    <>
      {solution && (
        <Screen solution={solution} minutes={minutes} seconds={seconds} />
      )}
    </>
  );
}

export default App;
