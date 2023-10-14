import { useState, useEffect } from "react";

interface IUseStats {
  turn: number;
  isCorrect: boolean;
}

const useStats = ({ turn, isCorrect }: IUseStats) => {
  const [games, setGames] = useState(0);
  const [wins, setWins] = useState(0);

  useEffect(() => {
    if (turn > 5) setGames((games) => games + 1);
    if (isCorrect) {
      setWins((win) => win + 1);
      setGames((game) => game + 1);
    }
  }, [turn, isCorrect]);

  return { games, wins };
};

export default useStats;
