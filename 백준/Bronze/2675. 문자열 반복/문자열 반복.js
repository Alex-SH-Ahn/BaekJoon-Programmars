const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" "))

for (let i = 0; i < Number(input[0]); i++) {
  let result = "";
  let loop = input[i+1][1].length;
  for (let j = 0; j < loop; j++) {
    result += input[i+1][1][j].repeat(input[i+1][0]);
  }
  console.log(result);
}