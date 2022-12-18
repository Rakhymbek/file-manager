import { cwd } from "node:process";
import { resolve } from "node:path";

export default function getPaths(args) {
  const currentDir = cwd();
  const splittedPaths = args.split(" ");
  const fileName = splittedPaths[0];
  const __filePath = resolve(currentDir, splittedPaths[0]);
  const __newFilePath = splittedPaths[1];
  return [__filePath, __newFilePath, fileName];
}
