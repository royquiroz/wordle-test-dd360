import { MdOutlineBackspace } from "react-icons/md";
import Key from "./Key";

interface IKeyboardProps {
  usedKeys: any;
  handleKeyup: (args: any) => void;
}

export default function Keyboard({ usedKeys, handleKeyup }: IKeyboardProps) {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex justify-center items-center w-5/12 h-44 bg-gray-100/80 dark:bg-sky-700/20 rounded-2xl p-2">
        <div>
          <div className="mb-1 flex justify-center">
            {["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map(
              (key: string) => (
                <Key
                  key={key}
                  letter={key}
                  color={usedKeys[key]}
                  press={() => handleKeyup({ key })}
                />
              )
            )}
          </div>
          <div className="mb-1 ml-8 flex justify-center">
            {["a", "s", "d", "f", "g", "h", "j", "k", "l", "ñ"].map(
              (key: string) => (
                <Key
                  key={key}
                  letter={key}
                  color={usedKeys[key]}
                  press={() => handleKeyup({ key })}
                />
              )
            )}
          </div>
          <div className="mb-1 mr-12 flex justify-center">
            <button
              className="w-16 h-10 bg-gray-300 dark:bg-cyan-800 m-1 rounded font-semibold text-sm"
              onClick={() => handleKeyup({ key: "Enter" })}
            >
              ENTER
            </button>
            {["z", "x", "c", "v", "b", "n", "m"].map((key: string) => (
              <Key
                key={key}
                letter={key}
                color={usedKeys[key]}
                press={() => handleKeyup({ key })}
              />
            ))}
            <button
              className="flex justify-center items-center w-16 h-10 bg-gray-300 dark:bg-cyan-800 m-1 rounded"
              onClick={() => handleKeyup({ key: "Backspace" })}
            >
              <MdOutlineBackspace size={21} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
