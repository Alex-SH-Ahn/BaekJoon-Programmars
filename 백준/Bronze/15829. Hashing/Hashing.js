const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')

const L = Number(input[0]);
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const text = input[1];
let sum = 0;

for (let i = 0; i < L; i++) {
  let index = alphabet.indexOf(text[i]);
  sum += (index+1) * Math.pow(31, i);
}

console.log(sum);