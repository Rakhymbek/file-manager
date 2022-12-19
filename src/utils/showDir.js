import { EOL } from "node:os";
import { cwd } from "node:process";

export default function showCurrentDir() {
  console.log(`${EOL}You are currently in ${cwd()}${EOL}`);
}
