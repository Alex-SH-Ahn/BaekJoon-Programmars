const input = require("fs")
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let mul = input[0]*input[1]*input[2];
let mulStr = String(mul);

let num = 0;
let i = 0;
for (let j = 0; j <= 9; j++) {
  num = [...mulStr].filter(x => x === j.toString()).length;
  console.log(num);
  i++;
}
