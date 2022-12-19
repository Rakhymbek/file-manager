import { cwd } from "node:process";
import { resolve } from "node:path";
import { writeFile } from "node:fs";
import { ERRORS } from "../../constants.js";
import showCurrentDir from "../../utils/showDir.js";

export default function add(file) {
  try {
    const currentDir = cwd();
    const __filePath = resolve(currentDir, file);
    writeFile(__filePath, "", { flag: "wx" }, (err) => {
      if (err) console.log(ERRORS.isExists);
      else console.log("The file has been saved!");
      showCurrentDir();
    });
  } catch (err) {
    console.error(ERRORS.error);
  }
}
