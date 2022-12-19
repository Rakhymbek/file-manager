import { createReadStream, createWriteStream, rm } from "node:fs";
import { resolve, basename } from "node:path";
import { pipeline } from "node:stream";
import { ERRORS } from "../../constants.js";
import checkDirPath from "../../helper/checkDirPath.js";
import { checkIsDirectory } from "../../helper/checkIsDirectory.js";
import checkIsFileExists from "../../helper/checkIsFileExists.js";
import showCurrentDir from "../../utils/showDir.js";

export default async function copy(
  [__filePath, __newFilePath],
  toBeRemoved = false
) {
  try {
    const __dirPath = resolve(__newFilePath, basename(__filePath));
    await checkIsDirectory(__filePath);
    await checkIsFileExists(__filePath);
    await checkDirPath(__dirPath);
    const readStream = createReadStream(__filePath, "utf-8");
    const writeStream = createWriteStream(__dirPath);
    readStream.on("error", (err) => {
      if (err) return;
    });
    writeStream.on("error", (err) => {
      if (err) return;
    });
    pipeline(readStream, writeStream, (err) => {
      if (err) console.log(ERRORS.notDir);
      showCurrentDir();
    });
    if (toBeRemoved) {
      rm(__filePath, (err) => {
        if (err) console.log(ERRORS.notDir);
      });
    }
  } catch (err) {
    console.error(ERRORS.error);
    showCurrentDir();
  }
}
