import { ERRORS } from "../constants.js";
import { stat } from "node:fs/promises";

export async function checkIsDirectory(path) {
  const isDirectory = await dirExists(path);
  if (isDirectory) throw new Error(ERRORS.notFile);
}

export async function dirExists(dirPath) {
  try {
    const stats = await stat(dirPath);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
}
