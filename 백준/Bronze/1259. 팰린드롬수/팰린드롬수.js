const input = require('fs')
  .readFileSync(process.platform==="linux" ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')

for (let i = 0; i < input.length; i++) {
  let num = input[i];
  if (num === '0') break;

  let isPalindrome = true;
  for (let j = 0; j < Math.floor(num.length/2); j++) {
    if (num[j] !== num[num.length - 1 - j]) {
      isPalindrome = false;
      break;
    }
  }
  console.log(isPalindrome ? 'yes' : 'no');
}