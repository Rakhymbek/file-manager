import showCurrentDir from "./utils/showDir.js";
import * as readline from "node:readline";
import up from './handler/up.js';

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
  if(input === 'up') {
    up();
  }
});
