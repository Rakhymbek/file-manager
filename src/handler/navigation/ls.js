import showCurrentDir from "../../utils/showDir.js";
import { readdir } from "node:fs/promises";
import { ERRORS } from "../../constants.js";

export default async function ls() {
  try {
    const currentDir = process.cwd();
    const filesInDir = await readdir(currentDir, { withFileTypes: true });
    const sortedFiles = filesInDir
      .map((file) => ({
        name: file.name,
        type: file.isFile() ? "file" : "directory",
      }))
      .sort(sortBy);
    console.table(sortedFiles);
    showCurrentDir();
  } catch (err) {
    console.log(ERRORS.error);
  }
}

function sortBy(a, b) {
  if (a.type > b.type) return 1;
  if (a.type < b.type) return -1;
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
}
