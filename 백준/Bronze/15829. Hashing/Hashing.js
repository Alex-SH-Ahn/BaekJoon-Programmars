const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')

const L = Number(input[0]);
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const text = input[1];

const MOD = 1234567891;
let sum = 0;
let power = 1;

for (let i = 0; i < L; i++) {
  let index = alphabet.indexOf(text[i]);
  sum = (sum + ((index + 1) * power) % MOD) % MOD;
  power = (power * 31) % MOD; // 31^i 값을 누적하여 계산
}

console.log(sum);
