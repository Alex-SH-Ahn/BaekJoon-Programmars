const input = require('fs')
  .readFileSync(process.platform==='linux'?'/dev/stdin':'./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number)

const N = input[0];
const list = input.slice(1);

list.sort((a, b) => a - b);

console.log(list.join('\n'));