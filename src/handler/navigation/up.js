import { chdir } from "node:process";
import showCurrentDir from "../../utils/showDir.js";

export default function up() {
  try {
    chdir("..");
    showCurrentDir();
  } catch (err) {
    console.error(`chdir: ${err}`);
  }
}
