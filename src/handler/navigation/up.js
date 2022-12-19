import { chdir } from "node:process";
import { ERRORS } from '../../constants.js';
import showCurrentDir from "../../utils/showDir.js";

export default function up() {
  try {
    chdir("..");
    showCurrentDir();
  } catch (err) {
    console.log(ERRORS.error);
  }
}
