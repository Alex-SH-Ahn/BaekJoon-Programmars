// input.txt 에서 입력값 받아들임
const input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
            .toString()
            .trim()
            .split("\n");

const [N, M] = input[0].split(' ').map(Number); // N, M을 숫자로 변환하여 저장

let adj_list = new Array(N+1).fill(null).map(() => []); // adj_list을 빈 배열로 초기화
let visited = new Array(N+1).fill(false); // visited 배열 초기화
let count = 0; // 연결요소 개수

for (let i = 1; i <= M; i++) { // 각 노드들 리스트에 저장
    const [u, v] = input[i].split(' ').map(Number);
    adj_list[u].push(v);
    adj_list[v].push(u);
}

function DFS(node) { // DFS 함수
    if (visited[node]) return // 방문한 노드라면 리턴
    visited[node] = true; // 노드 방문처리
    for (adj_node of adj_list[node]) { // 방문하지 않은 노드들에 대해 DFS
        DFS(adj_node);
    }
}

for (let i = 1; i <= N; i++) { // DFS 호출
    if (!visited[i]) {
        DFS(i);
        count++;
    }
}

console.log(count);