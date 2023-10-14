import { useEffect, useState } from "react";

// Components
import Navbar from "./Navbar";
import Board from "./Board";
import Keyboard from "./Keyboard";
import InstructionsModal from "./InstructionsModal";
import StatisticsModal from "./StatisticsModal";

// Hooks
import useWordle from "../hooks/useWordle";
import useStats from "../hooks/useStats";
import { Toaster } from "sonner";

interface IScreenProps {
  solution: string;
  minutes: number;
  seconds: number;
}

export default function Screen({ solution, minutes, seconds }: IScreenProps) {
  const { currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } =
    useWordle(solution);
  const { games, wins } = useStats({ turn, isCorrect });
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");

  useEffect(() => {
    setShowModal(true);
    setTypeModal("instructions");
  }, []);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    if (isCorrect || turn > 5) {
      setTimeout(() => {
        setShowModal(true);
        setTypeModal("stats");
      }, 2000);
      window.removeEventListener("keyup", handleKeyup);
    }

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup, isCorrect, turn]);

  return (
    <section className="h-screen dark:bg-sky-950 dark:text-white">
      <Navbar openModal={setShowModal} setTypeModal={setTypeModal} />
      <Board guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keyboard usedKeys={usedKeys} handleKeyup={handleKeyup} />
      {typeModal === "stats" && (
        <StatisticsModal
          close={() => setShowModal(false)}
          open={showModal}
          turn={turn}
          word={solution}
          games={games}
          wins={wins}
          minutes={minutes}
          seconds={seconds}
        />
      )}
      {typeModal === "instructions" && (
        <InstructionsModal close={() => setShowModal(false)} open={showModal} />
      )}
      <Toaster position="top-right" />
    </section>
  );
}
