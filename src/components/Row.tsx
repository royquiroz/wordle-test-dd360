import { v4 as uuid } from "uuid";

interface IRowProps {
  guess?: FormatGuess[];
  currentGuess?: string;
}

type FormatGuess = {
  key: string;
  color: string;
};

export default function Row({ guess, currentGuess }: IRowProps) {
  if (guess) {
    return (
      <div className="flex text-center justify-center">
        {guess.map((letter) => (
          <div
            key={uuid()}
            className={`flex justify-center items-center w-16 h-16 m-1 text-white bg-gray-300 text-center leading-10 uppercase font-bold text-4xl ${letter.color}`}
          >
            {letter.key}
          </div>
        ))}
      </div>
    );
  }

  if (currentGuess) {
    const letters = currentGuess.split("");

    return (
      <div className="flex text-center justify-center">
        {letters.map((letter) => (
          <div
            key={uuid()}
            className="flex justify-center items-center w-16 h-16 m-1 text-white bg-gray-300 dark:bg-cyan-800/50 leading-10 uppercase font-bold text-4xl"
          >
            {letter}
          </div>
        ))}
        {[...Array(5 - letters.length)].map(() => (
          <div
            key={uuid()}
            className="block w-16 h-16 m-1 text-white bg-gray-300 dark:bg-cyan-800/50 text-center leading-10 uppercase font-bold text-4xl"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex text-center justify-center">
      {[...Array(5)].map(() => {
        return (
          <div
            key={uuid()}
            className="block w-16 h-16 m-1 bg-gray-300 dark:bg-cyan-800/50 text-center leading-10 uppercase font-bold text-4xl"
          ></div>
        );
      })}
    </div>
  );
}
