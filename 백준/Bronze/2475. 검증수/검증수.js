// 입력받기
const fs = require('fs');
let input = require("fs").readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
            .toString()
            .trim()
            .split(" ")
            .map(Number);

let sum = 0;
for (i of input) {
  sum += i * i;
}
sum %= 10
console.log(sum);