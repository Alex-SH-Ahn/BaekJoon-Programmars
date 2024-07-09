function josephusProblem(N, K) {
    let arr = [];
    for (let i = 1; i <= N; i++) {
        arr.push(i);
    }

    let answer = [];
    let index = 0;

    while (arr.length > 0) {
        // calculate index
        index = (index + K - 1) % arr.length;
        // add to result [] and remove from arr
        answer.push(arr.splice(index, 1)[0]);
    }

    console.log(`<${answer.join(', ')}>`);
}

// input from input.txt
const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
const N = input[0];
const K = input[1];


// 예제 실행
josephusProblem(N, K);