import { createReadStream, createWriteStream } from "node:fs";
import { resolve, basename, parse } from "node:path";
import { createBrotliDecompress } from "node:zlib";
import { pipeline } from "node:stream/promises";
import { ERRORS } from "../../constants.js";
import checkIsFileExists from "../../helper/checkIsFileExists.js";
import showCurrentDir from "../../utils/showDir.js";

export default async function decompress([__filePath, __newFilePath]) {
  try {
    const { name, ext } = parse(__filePath);
    if (!ext.includes(".br")) throw new Error("There is no such file with .br extenstion");
    const __dirFilePath = resolve(__newFilePath, name);
    await checkIsFileExists(__filePath);
    const readStream = createReadStream(__filePath);
    const writeStream = createWriteStream(__dirFilePath);
    const brotliDecompress = createBrotliDecompress();

    await pipeline(readStream, brotliDecompress, writeStream);
    console.log(`The ${name}.br has been decompressed!`);
    showCurrentDir();
  } catch (err) {
    console.error(`${ERRORS.inputErr} Or invalid path to destination!`);
    showCurrentDir();
  }
}
