const input = require('fs')
  .readFileSync(process.platform==='linux'?'/dev/stdin':'./input.txt')
  .toString()
  .trim()
  .split('\n');

const [nums, ...board] = input;
const [N, M] = nums.split(' ');

function countChanges(board, startColor) {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // 체스판 패턴에 따라 예상되는 색상
      const expectedColor = (i + j) % 2 === 0 ? startColor : (startColor === 'W' ? 'B' : 'W');
      // 실제 색상과 다르면 카운트 증가
      if (board[i][j] !== expectedColor) count++;
    }
  }
  return count;
}

let list = [];

// 각 8x8 부분에 대해 시작 색상이 'W'인 경우와 'B'인 경우 모두 계산
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    const subBoard = [];
    for (let x = i; x < i + 8; x++) {
      const rowSlice = board[x].slice(j, j + 8);
      subBoard.push(rowSlice);
    }
    
    // 시작 색상이 'W'인 경우와 'B'인 경우 모두 계산
    const changesW = countChanges(subBoard, 'W');
    const changesB = countChanges(subBoard, 'B');
    
    // 두 경우 중 최소값 선택
    list.push(Math.min(changesW, changesB));
  }
}

console.log(Math.min(...list));