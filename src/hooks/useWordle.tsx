import { useEffect, useState } from "react";
import { keysValid } from "../utils/constants";
import { toast } from "sonner";

const useWordle = (solution: string) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});

  useEffect(() => {
    clearBoard();
  }, [solution]);

  function clearBoard() {
    setTurn(0);
    setCurrentGuess("");
    setGuesses([...Array(6)]);
    setHistory([]);
    setIsCorrect(false);
    setUsedKeys({});
  }

  const formatGuess = () => {
    const solutionArray: any = [...solution];
    const formattedGuess = [...currentGuess].map((letter) => {
      return { key: letter, color: "bg-gray-400" };
    });

    formattedGuess.forEach((letter, i) => {
      if (solution[i] === letter.key) {
        formattedGuess[i].color = "bg-green-600";
        solutionArray[i] = null;
      }
    });

    formattedGuess.forEach((letter, i) => {
      if (
        solutionArray.includes(letter.key) &&
        letter.color !== "bg-green-600"
      ) {
        formattedGuess[i].color = "bg-yellow-400";
        solutionArray[solutionArray.indexOf(letter.key)] = null;
      }
    });

    return formattedGuess;
  };

  const addNewGuess = (formattedGuess: any) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      const newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    setUsedKeys((prevUsedKeys: any) => {
      formattedGuess.forEach(
        (letter: { key: string | number; color: string }) => {
          const currentColor = prevUsedKeys[letter.key];

          if (letter.color === "bg-green-600") {
            prevUsedKeys[letter.key] = "bg-green-600";
            return;
          }
          if (
            letter.color === "bg-yellow-400" &&
            currentColor !== "bg-green-600"
          ) {
            prevUsedKeys[letter.key] = "bg-yellow-400";
            return;
          }
          if (
            letter.color === "bg-gray-400" &&
            currentColor !== ("bg-green-600" || "bg-yellow-400")
          ) {
            prevUsedKeys[letter.key] = "bg-gray-400";
            return;
          }
        }
      );

      return prevUsedKeys;
    });
    setCurrentGuess("");
  };

  const handleKeyup = (event: { key: string }) => {
    if (event.key === "Enter") {
      if (turn > 5) {
        toast.error("¡Usaste todas tus suposiciones!", {
          className: "bg-gray-500 dark:bg-cyan-800 dark:text-white",
          duration: 2500,
        });
        return;
      }

      if (history.includes(currentGuess)) {
        toast.error("Ingresa una palabra diferente.", {
          className: "bg-gray-500 dark:bg-cyan-800 dark:text-white",
          duration: 2500,
        });
        return;
      }

      if (currentGuess.length !== 5) {
        toast.error("La palabra debe tener 5 caracteres.", {
          className: "bg-gray-500 dark:bg-cyan-800 dark:text-white",
          duration: 2500,
        });
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
    }
    if (event.key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }
    if (keysValid.includes(event.key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + event.key.toLowerCase());
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup };
};

export default useWordle;
