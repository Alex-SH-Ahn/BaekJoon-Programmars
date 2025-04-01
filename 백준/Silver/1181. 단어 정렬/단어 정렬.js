const input = require('fs')
  .readFileSync(process.platform==='linux'?'/dev/stdin':'./input.txt')
  .toString()
  .trim()
  .split('\n')

const [N, ...list] = input;

list.sort((a, b) => a.length - b.length || a.localeCompare(b));

const set = [...new Set(list)]

console.log(set.join('\n'));
