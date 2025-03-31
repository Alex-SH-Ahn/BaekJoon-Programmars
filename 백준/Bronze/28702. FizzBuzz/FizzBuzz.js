const input = require('fs')
  .readFileSync(process.platform==='linux'?'/dev/stdin':'./input.txt')
  .toString()
  .trim()
  .split('\n')
// 마지막 입력값 다음 수(N+1) 구하기
let nextNumber;

// 입력값이 숫자인지 확인
for (let i = input.length-1; i >= 0; i--) {
  if (!isNaN(input[i])) {
    nextNumber = Number(input[i])+input.length-i;
  }
}

// 다음 숫자가 무엇인지 판별
if (nextNumber % 3 === 0 && nextNumber % 5 === 0) {
  console.log("FizzBuzz");
} else if (nextNumber % 3 === 0) {
  console.log("Fizz");
} else if (nextNumber % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(nextNumber);
}