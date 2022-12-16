export default function splitReadline(input) {
  const splittedInput = input
    .split(/(\s+)/)
    .filter((line) => line.trim().length > 0);
  const command = splittedInput[0];
  const args = splittedInput.slice(1).join(' ');
  return { command, args };
}
