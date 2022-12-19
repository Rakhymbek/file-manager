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
import remove from "./handler/basic-operations/remove.js";
import mv from "./handler/basic-operations/mv.js";
import os from "./handler/os/os.js";
import hash from "./handler/hash/hash.js";
import { ERRORS } from "./constants.js";
import compress from "./handler/zip/compress.js";
import decompress from "./handler/zip/decompress.js";

const username = process.argv[2].replace("--username=", "");
console.log(
  `Welcome to the File Manager, ${username ? username : "Anonymous"}!`
);

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
    case "mv":
      mv(getPaths(args));
      break;
    case "rm":
      remove(getPaths(args));
      break;
    case "os":
      os(args);
      showCurrentDir();
      break;
    case "hash":
      hash(getPaths(args));
      break;
    case "compress":
      compress(getPaths(args));
      break;
    case "decompress":
      decompress(getPaths(args));
      break;
    case ".exit":
      process.exit();
    default:
      console.log(ERRORS.inputErr);
      showCurrentDir();
      break;
  }
});

process.on("exit", () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!\n`);
});
