import { v4 as uuid } from "uuid";
import Row from "./Row";

interface IBoardProps {
  guesses: any[];
  currentGuess: string;
  turn: number;
}

interface FormatGuess {
  key: string;
  color: string;
}

export default function Board({ guesses, currentGuess, turn }: IBoardProps) {
  return (
    <div className="mt-10">
      {guesses.map((guess: FormatGuess[], i: number) => {
        if (turn === i) {
          return <Row key={uuid()} currentGuess={currentGuess} />;
        }
        return <Row key={uuid()} guess={guess} />;
      })}
    </div>
  );
}
