import { chdir } from "node:process";
import { ERRORS } from "../../constants.js";
import showCurrentDir from "../../utils/showDir.js";

export default function cd(path) {
  try {
    chdir(path);
    showCurrentDir();
  } catch (err) {
    console.log(ERRORS.error);
  }
}
