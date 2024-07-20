// input.txt 에서 입력값 받아들임
const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
            .toString()
            .trim()
            .split("\n");

const [N, M] = input[0].split(' ').map(Number); // N, M을 숫자로 변환하여 저장

const maze = new Array(N); // graph의 크기를 N으로 초기화

// 입력값 행렬로 변환
for (let i = 0; i < N; i++) {
    maze[i] = new Array(M);
    const row = input[i+1].split('').map(Number); // input[i+1]에서 행 데이터를 가져옴
    for (let j = 0; j < M; j++) {
        maze[i][j] = row[j];
    }
}

function BFS() {
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // 상하좌우 이동
    const queue = [[0, 0, 1]];
    maze[0][0] = 0; // 방문표시

    while (queue.length > 0) {
        const [x, y, count] = queue.shift(); // queue의 첫번째 요소 빼기

        if (x === N - 1 && y === M - 1) {
            return count;
        }

        for (let [dx, dy] of directions) {
            const nx = x + dx
            const ny = y + dy;
            
            // check if it exceeds maze size + if current pos == 1
            if (nx >= 0 && nx < N && ny >= 0 && ny < M && maze[nx][ny] === 1) {
                maze[nx][ny] = 0;
                queue.push([nx, ny, count + 1]);
            }
        }
    }
    return -1; // no path
}

console.log(BFS());
