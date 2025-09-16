const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => num.split(" ").map(Number));

function vacation(test) {
  const L = test[0];
  const P = test[1];
  let V = test[2];
  let cnt = 0;

  while (V > P) {
    let num = Math.floor(V / P);
    V -= num * P;
    cnt += num * L;
  }

  if (V <= L) cnt += V;
  if (V > L && V < P) cnt += L;
  return cnt;
}

let i = 0;

while (i < input.length) {
  let test = input[i];
  if (test.every((x) => x === 0)) {
    break;
  }
  console.log(`Case ${i + 1}:`, vacation(test));
  i++;
}