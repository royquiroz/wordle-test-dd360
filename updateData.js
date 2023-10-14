import { writeFile, mkdir, access } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const accentMarks = ["á", "é", "í", "ó", "ú"];
const accentMarksReplacement = {
  á: "a",
  é: "e",
  í: "i",
  ó: "o",
  ú: "u",
};
let words;

async function checkIfDirectoryExists(dirPath) {
  try {
    await access(dirPath);

    console.log("The directory exists");
  } catch (error) {
    console.log(error.message);

    if (error.code === "ENOENT") {
      console.log("The directory does NOT exist");

      await mkdir(dirPath, { recursive: true });
    }
  }
}

async function createFileWords(dirFile, words) {
  await writeFile(dirFile, JSON.stringify([...new Set(words)]), {
    encoding: "utf8",
  });
  console.log("saved words");
}

async function generateDataForGame() {
  const response = await fetch(
    "https://gitlab.com/d2945/words/-/raw/main/words.txt"
  );
  const data = await response.text();

  words = data
    .split("\n")
    .filter((str) => {
      if (str.length === 5) {
        return str;
      }
    })
    .map((word) => {
      let newWord = "";
      for (let c of word) {
        if (accentMarks.indexOf(c) !== -1) {
          newWord += accentMarksReplacement[c];
        } else {
          newWord += c;
        }
      }

      return newWord;
    });

  const filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(filename);

  await checkIfDirectoryExists(join(__dirname, "src/data/"));
  await createFileWords(join(__dirname, "src/data/words.json"), words);
}

generateDataForGame();
