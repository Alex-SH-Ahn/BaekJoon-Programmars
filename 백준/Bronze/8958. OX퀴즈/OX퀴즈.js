const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let add = 1;
  let sum = 0;
  let quiz = input[i];
  for (let j = 0; j < quiz.length; j++) {
    if (quiz[j] === "O") {
      sum += add;
      add++;
    } else {
      add = 1;
    }
  }
  console.log(sum);
}