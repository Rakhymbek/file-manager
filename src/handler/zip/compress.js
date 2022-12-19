import { createReadStream, createWriteStream } from "node:fs";
import { resolve, basename } from "node:path";
import { createBrotliCompress } from "node:zlib";
import { pipeline } from "node:stream";
import { ERRORS } from "../../constants.js";
import checkIsFileExists from "../../helper/checkIsFileExists.js";
import showCurrentDir from "../../utils/showDir.js";

export default async function compress([__filePath, __newFilePath, fileName]) {
  try {
    const __dirPath = resolve(__newFilePath, basename(__filePath));
    await checkIsFileExists(__filePath);
    const readStream = createReadStream(__filePath, "utf-8");
    const writeStream = createWriteStream(__dirPath + ".br");
    const brotliCompress = createBrotliCompress();

    readStream.on("error", (err) => {
      if (err) return;
    });
    writeStream.on("error", (err) => {
      if (err) return;
    });
    pipeline(readStream, brotliCompress, writeStream, (err) => {
      if (err) console.log(ERRORS.notFile);
      else console.log(`The ${fileName} has been compressed!`);
      showCurrentDir();
    });
  } catch (err) {
    console.error(`${ERRORS.inputErr} Or invalid path to destination!`);
    showCurrentDir();
  }
}
