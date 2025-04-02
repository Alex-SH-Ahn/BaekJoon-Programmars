const input = require('fs')
  .readFileSync(process.platform==='linux'?'/dev/stdin':'./input.txt')
  .toString()
  .trim()

let N = Number(input);

function countTrailingZeros(n) {
  let count = 0;
  
  // 5의 배수마다 0이 하나씩 추가됨
  for (let i = 5; Math.floor(n / i) > 0; i *= 5) {
    count += Math.floor(n / i);
  }
  
  return count;
}

console.log(countTrailingZeros(N));