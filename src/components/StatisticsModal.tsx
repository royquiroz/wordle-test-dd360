import { formatNumber } from "../utils/libs";

interface IStatisticsModalProps {
  close: () => void;
  open: boolean;
  word: string;
  turn: number;
  games: number;
  wins: number;
  minutes: number;
  seconds: number;
}

export default function StatisticsModal({
  close,
  open,
  word,
  turn,
  games,
  wins,
  minutes,
  seconds,
}: IStatisticsModalProps) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-white/80 dark:bg-black/70" : "invisible"
      }`}
    >
      <div
        className={`bg-white border border-black dark:bg-sky-950 dark:text-white dark:border-white w-6/12 rounded-xl shadow p-8 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <h3 className="text-3xl font-bold text-center mb-10">Estadísticas</h3>

        <div className="flex justify-around mb-10">
          <div>
            <p className="text-2xl text-center font-bold">{games}</p>
            <p>Jugadas</p>
          </div>
          <div>
            <p className="text-2xl text-center font-bold">{wins}</p>
            <p>Victorias</p>
          </div>
        </div>

        {turn === 6 && (
          <p className="text-center mb-8">
            La palabra era: <span className="font-bold uppercase">{word}</span>
          </p>
        )}

        <p className="text-center uppercase mb-2">Siguiente Palabra</p>
        <p className="text-lg text-center font-bold mb-10">
          {formatNumber(minutes)}:{`${formatNumber(seconds)}`}
        </p>

        <div className="flex justify-center">
          <button
            onClick={close}
            className="text-xl font-bold text-white w-48 h-10 rounded bg-green-600"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
