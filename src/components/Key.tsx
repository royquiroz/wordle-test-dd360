interface IKeyProps {
  letter: string;
  color?: string;
  press: () => void;
}

export default function Key({ letter, color, press }: IKeyProps) {
  function stylesUse() {
    const styles = "w-10 h-10 m-1 rounded font-semibold";
    const backgroundColors = color
      ? `dark:${color} ${color}`
      : "bg-gray-300 dark:bg-cyan-800";

    return color
      ? `${styles} ${backgroundColors} text-white`
      : `${styles} ${backgroundColors}`;
  }

  return (
    <>
      <button className={stylesUse()} onClick={press}>
        {letter.toUpperCase()}
      </button>
    </>
  );
}
