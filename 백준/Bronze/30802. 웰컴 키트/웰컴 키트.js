const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const N = input[0][0];
const T = input[2][0];
const req = input[1];
const req2 = input[2][1];
let Tsum = 0;

for (let i = 0; i < req.length; i++) {
  Tsum += Math.ceil(req[i] / T);
}
console.log(`${Tsum}\n${Math.floor(N/req2)} ${N%req2}`)