import { ERRORS } from "../constants.js";
import checkPath from "./checkPath.js";

export default async function checkDirPath(path) {
  const isExists = await checkPath(path);
  if (isExists) throw new Error(ERRORS.notFile);
}
