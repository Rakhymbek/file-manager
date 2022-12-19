import * as readline from "node:readline";
import showCurrentDir from "./utils/showDir.js";
import splitReadline from "./utils/splitReadline.js";
import getPaths from "./utils/getPaths.js";
import up from "./handler/navigation/up.js";
import cd from "./handler/navigation/cd.js";
import ls from "./handler/navigation/ls.js";
import cat from "./handler/basic-operations/cat.js";
import add from "./handler/basic-operations/add.js";
import rn from "./handler/basic-operations/rn.js";
import copy from "./handler/basic-operations/copy.js";
import remove from './handler/basic-operations/remove.js';

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
    case "rn":
      rn(getPaths(args));
      break;
    case "cp":
      copy(getPaths(args));
      break;
    case "rm":
      remove(getPaths(args));
      break;
    default:
      break;
  }
});
