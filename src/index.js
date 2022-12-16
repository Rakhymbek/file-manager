import showCurrentDir from "./utils/showDir.js";
import * as readline from "node:readline";
import up from "./handler/up.js";
import cd from "./handler/cd.js";
import splitReadline from "./utils/splitReadline.js";

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
    default:
      break;
  }
});
