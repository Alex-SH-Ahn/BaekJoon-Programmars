// input.txt로부터 입력 받음
const input = require("fs")
              .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
              .toString()
              .trim()
              .split("\n")
              .map((el) => el.split(" ").map(Number))

const [N, S] = input[0].map(Number); // N, S 저장
let list = input[1].map(Number); // N개의 숫자 리스트로 저장
let answer = []; // 부분 수열
let cnt = 0; // 부분 수열의 개수 세기

function DFS(start) {
  if (answer.reduce((acc, cur) => acc + cur, 0) === S && answer.length > 0) {
    cnt++;
  }
  for (let i = start; i < N; i++) {
    answer.push(list[i]);
    DFS(i + 1)
    answer.pop();
  }
}

DFS(0);
console.log(cnt);