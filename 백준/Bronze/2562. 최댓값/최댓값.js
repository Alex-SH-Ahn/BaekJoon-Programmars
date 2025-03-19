const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let max = input[0]
let maxIndex = 0;

for (let i = 1; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i]
    maxIndex = i;
  }
}
console.log(`${max}\n${maxIndex+1}`)