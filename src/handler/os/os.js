import { arch, cpus, EOL, homedir, userInfo } from "node:os";
import { ERRORS } from "../../constants.js";

export default function os(arg) {
  switch (arg) {
    case "--EOL":
      console.log(JSON.stringify(EOL));
      break;
    case "--cpus":
      console.log(cpus());
      break;
    case "--homedir":
      console.log(homedir());
      break;
    case "--username":
      console.log(userInfo().username);
      break;
    case "--architecture":
      console.log(arch());
      break;
    default:
      console.log(ERRORS.inputErr);
      break;
  }
}
