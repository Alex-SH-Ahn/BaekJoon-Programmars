const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((num) => num.split(" ").map(Number));

const [N, mnt] = input;
let cnt = 0;
let max = cnt;

if (N[0] === 1) {
  console.log(1)
} else {
  for (let i = 1; i < mnt.length; i++) {
    let a = mnt[i - 1];
    let b = mnt[i];
    while (a > b) {
      b = mnt[i];
      if (a > b) {
        i++;
        cnt++;
      } else {
        max = Math.max(cnt, max);
        cnt = 0;
        break;
      }
    }
  }
  console.log(max);
}
