import { rename } from "node:fs";
import { ERRORS } from "../../constants.js";
import showCurrentDir from "../../utils/showDir.js";

export default function rn([__filePath, __newFilePath, fileName]) {
  try {
    rename(__filePath, __newFilePath, (err) => {
      if (err) console.log(ERRORS.notFile);
      else console.log(`The "${fileName}" has been renamed to ${__newFilePath}`);
      showCurrentDir();
    });
  } catch (err) {
    console.error(ERRORS.error);
  }
}
