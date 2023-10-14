import { useState } from "react";
import { MdHelp, MdPoll, MdLeaderboard } from "react-icons/md";
import useColorMode from "../hooks/useDarkMode";

interface INavbarProps {
  openModal: (arg: boolean) => void;
  setTypeModal: (arg: string) => void;
}

export default function Navbar({ openModal, setTypeModal }: INavbarProps) {
  const [colorMode, setColorMode] = useColorMode();
  const [inputCheck, setInputCheck] = useState(colorMode === "dark");

  function openInstructionsModal() {
    openModal(true);
    setTypeModal("instructions");
  }

  function openStatsModal() {
    openModal(true);
    setTypeModal("stats");
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-5/12 h-20 bg-gray-100/80 dark:bg-sky-700/20 rounded-2xl mt-6 px-4">
          <MdHelp
            size={20}
            onClick={openInstructionsModal}
            className="cursor-pointer"
          />
          <p className="text-4xl text-center font-semibold uppercase">Wordle</p>
          <div className="flex items-center gap-2">
            <MdLeaderboard
              size={25}
              onClick={openStatsModal}
              className="cursor-pointer"
            />
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={() => setInputCheck(!inputCheck)}
                checked={inputCheck}
              />
              <div
                onClick={() =>
                  setColorMode(colorMode === "light" ? "dark" : "light")
                }
                className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
              ></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
