const input = Number(
  require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
);

let num = 0;

if (input === 1) {
  console.log(1)
} else {
  while (Math.pow(num, 2) + num - 2 * input <= 0) {
    num++;
  }
  console.log(num - 1)
}