import * as readline from "node:readline";
import showCurrentDir from "./utils/showDir.js";
import splitReadline from "./utils/splitReadline.js";
import up from "./handler/navigation/up.js";
import cd from "./handler/navigation/cd.js";
import ls from "./handler/navigation/ls.js";
import cat from "./handler/basic-operations/cat.js";
import add from "./handler/basic-operations/add.js";

const start = () => {
  const username = process.argv[2].replace("--username=", "");
  console.log(`Welcome to the File Manager, ${username}!`);
};

start();
showCurrentDir();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { command, args } = splitReadline(input);
  switch (command) {
    case "up":
      up();
      break;
    case "cd":
      cd(args);
      break;
    case "ls":
      ls();
      break;
    case "cat":
      cat(args);
      break;
    case "add":
      add(args);
      break;
    default:
      break;
  }
});
