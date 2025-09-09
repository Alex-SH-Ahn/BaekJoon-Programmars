const N = Number(require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")[0]);

function minBags(n) {
  let five = Math.floor(n / 5);
  while (five >= 0) {
    const rest = n - 5 * five;
    if (rest % 3 === 0) return five + rest / 3;
    five--;
  }
  return -1;
}

console.log(minBags(N));