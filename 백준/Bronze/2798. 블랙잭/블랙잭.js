const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(" ").map(Number))

const N = input[0][0];
let cards = input[1];
const target = input[0][1];
let max = input[0][0];

cards = cards.sort((a,b) => a - b); // 오름차순 정렬

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      if (cards[i] + cards[j] + cards[k] <= target) {
        max = Math.max(max, cards[i] + cards[j] + cards[k]);
      }
    }
  }
}

console.log(max);
