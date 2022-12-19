import { cwd, stdout } from "node:process";
import { resolve } from "node:path";
import { createReadStream } from "node:fs";
import { ERRORS } from "../../constants.js";
import showCurrentDir from "../../utils/showDir.js";

export default function cat(path) {
  try {
    const currentDir = cwd();
    const rs = createReadStream(resolve(currentDir, path), "utf-8");
    rs.on("error", () => console.error(ERRORS.notFile));
    rs.on("data", (chunk) => stdout.write(chunk));
    rs.on("close", showCurrentDir);
  } catch (err) {
    console.error(ERRORS.error);
  }
}
