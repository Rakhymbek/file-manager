const { createHash } = await import("node:crypto");
import { readFile } from "node:fs/promises";
import { ERRORS } from "../../constants.js";
import showCurrentDir from "../../utils/showDir.js";

export default async function hash([__filePath]) {
  try {
    const hashed = createHash("sha256");
    const fileData = await readFile(__filePath, "utf8");
    console.log(hashed.update(fileData).digest("hex"));
    showCurrentDir();
  } catch (err) {
    console.error(ERRORS.error);
    showCurrentDir();
  }
}
