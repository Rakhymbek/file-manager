import { cwd } from "node:process";
import { resolve } from "node:path";
import { rename } from "node:fs";
import { ERRORS } from "../../constants.js";
import showCurrentDir from "../../utils/showDir.js";

export default function rn(paths) {
  try {
    const currentDir = cwd();
    const splittedPaths = paths.split(" ");
    const __filePath = resolve(currentDir, splittedPaths[0]);
    const __newFilePath = splittedPaths[1];
    rename(__filePath, __newFilePath, (err) => {
      if (err) console.log(ERRORS.notFile);
      else console.log(`The "${splittedPaths[0]}" has been renamed to ${__newFilePath}`);
      showCurrentDir();
    });
  } catch (err) {
    console.error(ERRORS.error);
  }
}
