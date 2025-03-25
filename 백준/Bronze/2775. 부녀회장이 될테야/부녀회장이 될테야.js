const input = require('fs')
  .readFileSync(process.platform==='linux'?'/dev/stdin':'./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const [T, ...list] = input;

for (let i = 0; i < list.length; i+=2){
  const k = list[i];
  const n = list[i+1];
  
  // DP 테이블 초기화
  const dp = Array.from({length: k+1}, () => Array(n+1).fill(0));
  
  // 0층 초기화
  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }
  
  // 나머지 층 계산
  for (let floor = 1; floor <= k; floor++) {
    for (let room = 1; room <= n; room++) {
      dp[floor][room] = dp[floor][room-1] + dp[floor-1][room];
    }
  }
  
  console.log(dp[k][n]);
}