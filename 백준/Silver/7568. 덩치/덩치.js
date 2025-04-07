const input = require('fs')
  .readFileSync(process.platform==='linux'?'/dev/stdin':'./input.txt')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
let list = input.slice(1).map(line => line.split(' ').map(Number));
let ans = [];

for (let i = 0; i < list.length; i++) {
  let rank = 1;
  for (let j = 0; j < list.length; j++) {
    if (i === j) continue
    if (list[i][0] < list[j][0] && list[i][1] < list[j][1]) {
      rank++;
    }
  }
  ans.push(rank);
}

console.log(ans.join(' '))