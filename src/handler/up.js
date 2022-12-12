import { chdir } from "node:process";
import showCurrentDir from "../utils/showDir.js";

export default function up() {
  chdir("..");
  showCurrentDir();
}
