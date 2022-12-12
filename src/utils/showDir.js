import { cwd } from "node:process";

export default function showCurrentDir() {
  console.log(`You are currently in ${cwd()}`);
}
