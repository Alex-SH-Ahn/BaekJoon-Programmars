// input.txt 에서 입력값 받아들임
const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
            .toString()
            .trim()
            .split("\n");

let T = Number(input[0]); // T을 숫자로 변환하여 저장
let currentLine = 1;

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

let answer = [];

function DFS(x, y, field, N, M) {
    if ((x < 0) || (x >= M) || (y < 0) || (y >= N)) {
        return
    }
    if (field[x][y] == 1) {
        field[x][y] = 0; // 방문처리

        // 상하좌우 방문하며 DFS
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            DFS(nx, ny, field, N, M);
        }
    }
}

while (T > 0) {
    const [M, N, K] = input[currentLine++].split(' ').map(Number); // M, N, K 저장
    // console.log('M, N, K', M, N, K)
    const field = new Array(M).fill(null).map(() => new Array(N).fill(0));

    // 배추 심기
    for (let i = 1; i <= K; i++) {
        let [row, column] = input[currentLine++].split(' ').map(Number);
        // console.log('row, column: ', row, column);
        field[row][column] = 1; // 배추가 있는 곳은 1로 작성
    }

    let worms = 0;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (field[i][j] == 1) {
                DFS(i, j, field, N, M);
                // console.log(`worms: ${worms}`);
                worms++;
            }
        }
    }
    answer.push(worms);
    T--;
}

// 정답 출력
answer.forEach(a => console.log(a));