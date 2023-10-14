interface IInstructionsModal {
  close: () => void;
  open: boolean;
}

export default function InstructionsModal({ close, open }: IInstructionsModal) {
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
        <h3 className="text-3xl font-bold text-center mb-4">Cómo jugar</h3>

        <p className="text-base mb-2">
          Adivina la palabra oculta en cinco intentos.
        </p>

        <p className="text-base mb-2">
          Cada intento debe ser una palabra válida de 5 letras.
        </p>

        <p className="text-base mb-2">
          Después de cada intento el color de las letras cambia para mostrar qué
          tan cerca estás de acertar la palabra.
        </p>

        <h6 className="text-base font-bold mb-2">Ejemplos</h6>

        <div className="flex text-center justify-center mb-2">
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded leading-10 uppercase font-bold text-3xl bg-green-600">
            G
          </div>
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded border-black leading-10 uppercase font-bold text-3xl">
            A
          </div>
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded border-black leading-10 uppercase font-bold text-3xl">
            T
          </div>
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded border-black leading-10 uppercase font-bold text-3xl">
            O
          </div>
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded border-black leading-10 uppercase font-bold text-3xl">
            S
          </div>
        </div>

        <p className="text-base mb-2">
          La letra <span className="font-bold">G</span> está en la palabra y en
          la posición correcta.
        </p>

        <div className="flex text-center justify-center mb-2">
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded border-black leading-10 uppercase font-bold text-3xl">
            V
          </div>
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded border-black leading-10 uppercase font-bold text-3xl">
            O
          </div>
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded leading-10 uppercase font-bold text-3xl bg-yellow-400">
            C
          </div>
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded border-black leading-10 uppercase font-bold text-3xl">
            A
          </div>
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded border-black leading-10 uppercase font-bold text-3xl">
            L
          </div>
        </div>

        <p className="text-base mb-2">
          La letra <span className="font-bold">C</span> está en la palabra pero
          en la posición incorrecta.
        </p>

        <div className="flex text-center justify-center mb-2">
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded border-black leading-10 uppercase font-bold text-3xl">
            C
          </div>
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded border-black leading-10 uppercase font-bold text-3xl">
            A
          </div>
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded border-black leading-10 uppercase font-bold text-3xl">
            N
          </div>
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded border-black leading-10 uppercase font-bold text-3xl">
            T
          </div>
          <div className="flex justify-center items-center w-16 h-16 m-2 border rounded leading-10 uppercase font-bold text-3xl bg-gray-400">
            O
          </div>
        </div>

        <p className="text-base mb-2">
          La letra <span className="font-bold">O</span> no está en la palabra.
        </p>

        <p className="text-base mb-4">
          Puede haber letras repetidas. Las pistas son independientes para cada
          letra.
        </p>

        <p className="text-base text-center mb-4">
          ¡Una palabra nueva cada 5 minutos!
        </p>

        <div className="flex justify-center">
          <button
            onClick={close}
            className="text-xl uppercase font-bold text-white w-48 h-10 rounded bg-green-600"
          >
            !Jugar¡
          </button>
        </div>
      </div>
    </div>
  );
}
