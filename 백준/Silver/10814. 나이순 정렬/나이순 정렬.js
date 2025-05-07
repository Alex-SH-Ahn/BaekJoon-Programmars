const input = require('fs')
  .readFileSync(process.platform==='linux'?'/dev/stdin':'./input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, ...list] = input;

// 1. sort in age
// 2. if same age, then
// 3. sort FIFO


const parsedList = list.map(line => line.split(' '));
parsedList.sort((a, b) => Number(a[0]) - Number(b[0]));

let list2 = parsedList.map((line) => line.join(' '));
console.log(list2.join('\n'))
