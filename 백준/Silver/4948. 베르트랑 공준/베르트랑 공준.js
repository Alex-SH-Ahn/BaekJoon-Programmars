const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function countPrimes(n) {
    // 2n까지의 소수를 구하기 위한 배열 초기화
    const isPrime = new Array(2 * n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    // 에라토스테네스의 체 구현
    for (let i = 2; i <= Math.ceil(Math.sqrt(2 * n)); i++) {
        if (isPrime[i]) {
            for (let j = i * 2; j <= 2 * n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    // n보다 크고 2n보다 작거나 같은 소수의 개수 세기
    let count = 0;
    for (let i = n + 1; i <= 2 * n; i++) {
        if (isPrime[i]) count++;
    }
    
    return count;
}

// 입력값 처리
for (let i = 0; i < input.length - 1; i++) {
    const n = input[i];
    console.log(countPrimes(n));
}