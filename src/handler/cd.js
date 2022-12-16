import { chdir } from "node:process";
import showCurrentDir from "../utils/showDir.js";

export default function cd(path) {
  try {
    chdir(path);
    showCurrentDir();
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
}
