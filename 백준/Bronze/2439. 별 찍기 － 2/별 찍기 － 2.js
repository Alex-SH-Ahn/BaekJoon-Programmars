const input = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let x = input - 1;
let i = 1;
while(x >= 0) {
  console.log(" ".repeat(x)+"*".repeat(i));
  x-=1;
  i++;
}