// input.txt로부터 입력 받음
const input = require("fs")
              .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
              .toString()
              .trim()
              .split("\n")
              .map((el) => el.split(" ").map(Number));

const [N, M] = input[0]; // N과 M을 저장
let list = input[1]; // N개의 수 저장
let num = [];
let visited = Array(N).fill(false);

function DFS(start) {
  if (num.length === M) {
    console.log(num.join(' '));
    return;
  }
  let prev = null;
  for (let i = start; i < N; i++) {
    if (!visited[i] && list[i] !== prev) {
      visited[i] = true;
      num.push(list[i]);
      DFS(0);
      visited[i] = false;
      num.pop();
      prev = list[i];
    }
  }
}

list.sort((a, b) => a - b); // list 정렬

DFS(0);