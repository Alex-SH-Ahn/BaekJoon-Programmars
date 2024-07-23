// input.txt로부터 입력 받음
const input = require("fs")
              .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
              .toString()
              .trim()
              .split("\n")
              .map((el) => el.split(" ").map(Number))

const [N, M] = input[0];
let result = "";

function DFS(num = [], depth = 0) {
  if (num.length === M) {
    result += `${num.join(" ")}\n`; // 결과를 문자열에 누적
    return;
  }
  for (let i = 1; i <= N; i++) {
    DFS([...num, i], depth + 1); // 현재 숫자 선택, 다음 단계로
  }
}

DFS();
console.log(result.trim()); // 정답 출력