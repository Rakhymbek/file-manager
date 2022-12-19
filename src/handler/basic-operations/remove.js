import { rm } from "node:fs";
import { ERRORS } from "../../constants.js";
import showCurrentDir from "../../utils/showDir.js";

export default function remove([__filePath, _, fileName]) {
  try {
    rm(__filePath, (err) => {
      if (err) console.log(ERRORS.notFile);
      else console.log(`The "${fileName}" has been removed succesfully!`);
      showCurrentDir();
    });
  } catch (err) {
    console.error(ERRORS.error);
  }
}
