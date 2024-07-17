// input.txt 에서 입력값 받아들임
const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
            .toString()
            .trim()
            .split("\n");

const N = Number(input[0]); // N을 숫자로 변환하여 저장

const graph = new Array(N); // graph의 크기를 N으로 초기화

// 입력값 행렬로 변환
for (let i = 0; i < N; i++) {
    graph[i] = new Array(N);
    const row = input[i + 1].split('').map(Number); // input[i+1]에서 행 데이터를 가져옴
    for (let j = 0; j < N; j++) {
        graph[i][j] = row[j];
    }
}

// 상하좌우로 이동할 수 있도록 좌표값 만들기
dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

let answer = [];
let cluster = 0;

// DFS
function DFS(x, y) {
    // 범위를 벗어나면 리턴
    if ((x < 0) || (x >= N) || (y < 0) || (y >= N)) {
        return
    }
    if (graph[x][y] == 1) {
        graph[x][y] = 0; // 방문처리
        cluster++;

        // 상하좌우 방문하며 DFS
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            DFS(nx, ny);
        }
    }
}

// graph 순회하며 1이면 방문
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (graph[i][j] == 1) {
            DFS(i, j);
            answer.push(cluster);
            cluster = 0;
        }
    }
}

answer.sort((a, b) => a - b); // 단지번호 오름차순 정렬

console.log(answer.length)
for (let i = 0; i < answer.length; i++) {
    console.log(answer[i])
}