import { ERRORS } from "../../constants.js";
import copy from "./copy.js";

export default async function mv([__filePath, __newFilePath]) {
  try {
    await copy([__filePath, __newFilePath], true);
  } catch (err) {
    console.error(ERRORS.error);
  }
}
