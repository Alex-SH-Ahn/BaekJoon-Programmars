const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let [a, b] = input;
a = Number(a);
b = b.split("");

let sum = 0;
for (let i = 0; i < a; i++) {
  sum += +b[i];
}
console.log(sum);