const input = require('fs')
  .readFileSync(process.platform === "linux" ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));


for (let i = 0; i < input.length; i++) {
  let tri = input[i].sort((a, b) => a - b);

  if (tri[0] === 0) break;

  if (tri[0] ** 2 + tri[1] ** 2 === tri[2] ** 2) {
    console.log("right");
  } else {
    console.log("wrong")
  }
}