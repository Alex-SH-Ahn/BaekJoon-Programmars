const input = require('fs')
  .readFileSync(process.platform==='linux'?'/dev/stdin':'./input.txt')
  .toString()
  .trim()
  .split('\n');

const [N, ...list] = input;

console.log(
  list
    .map(line => line.split(' '))
    .sort((a, b) => {
      if (Number(a[1]) === Number(b[1])) return Number(a[0]) - Number(b[0]);
      return Number(a[1]) - Number(b[1]);
    })
    .map(line => line.join(' '))
    .join('\n')
)