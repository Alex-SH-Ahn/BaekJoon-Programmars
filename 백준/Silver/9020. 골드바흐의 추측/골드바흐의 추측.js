const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function getPrimes(limit) {
  const isPrime = new Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime;
}

function goldbachPartition(n, isPrime) {
  let bestPair = null;
  let minDiff = Infinity;

  for (let i = 2; i <= n / 2; i++) {
    let j = n - i;
    if (isPrime[i] && isPrime[j]) {
      let diff = Math.abs(j - i);
      if (diff < minDiff) {
        minDiff = diff;
        bestPair = [i, j];
      }
    }
  }

  if (bestPair) {
    console.log(`${bestPair[0]} ${bestPair[1]}`);
  }
}

const maxN = Math.max(...input);
const isPrime = getPrimes(maxN);

for (let i = 0; i < input.length; i++) {
  const n = input[i];
  if (n > 2 && n % 2 === 0) {
    goldbachPartition(n, isPrime);
  }
}
