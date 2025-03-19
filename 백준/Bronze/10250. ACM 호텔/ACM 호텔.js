const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (let i = 1; i <= input[0]; i++) {
  const [H, W, N] = input[i];
  
  const floor = N % H === 0 ? H : N % H;
  const room = Math.ceil(N / H);

  console.log(`${floor}${room < 10 ? '0' + room : room}`);
}