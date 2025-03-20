const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

for (let i = 0; i < alphabet.length; i++) {
  process.stdout.write(input.indexOf(alphabet[i]).toString() + " ");
}