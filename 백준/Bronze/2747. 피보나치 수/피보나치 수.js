const input = require('fs')
  .readFileSync(process.platform==='linux'?'/dev/stdin':'./input.txt')
  .toString()
  .trim()

function fibo(num) {
  const dp = new Array(Number(num) + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= num; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[num]
}

console.log(fibo(input));