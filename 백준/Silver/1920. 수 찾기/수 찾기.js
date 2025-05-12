const input = require('fs')
  .readFileSync(process.platform==='linux'?'/dev/stdin':'./input.txt')
  .toString()
  .trim()
  .split('\n');

let n = input[0];
let nums1 = new Set(input[1].split(' '));
let m = input[2];
let nums2 = input[3].split(' ');

for (let i = 0; i < m; i++) {
  nums1.has(nums2[i]) ? console.log(1) : console.log(0);
}