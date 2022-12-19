import { access, constants } from "node:fs/promises";

export default async function checkPath(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
