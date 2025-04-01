const input = require('fs')
  .readFileSync(process.platform==='linux'?'/dev/stdin':'./input.txt')
  .toString()
  .trim()

let N = Number(input);
let num = 0;
let target = 0;

while (num < N) {
  if (String(target).includes("666")) { num++ }
  target++;
} 

console.log(target-1);