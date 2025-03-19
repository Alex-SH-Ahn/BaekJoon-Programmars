const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let arr = input.map(Number);
console.log(arr[0] + arr[1] - arr[2]);
console.log(Number(input[0] + input[1]) - Number(input[2]))