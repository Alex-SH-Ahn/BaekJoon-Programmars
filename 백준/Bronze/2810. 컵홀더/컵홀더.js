const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [num, str] = input;
let newStr;

newStr = str.replaceAll("LL", "*");
newStr = newStr.replaceAll("S", "*");

if (num === 1) console.log(1);
else console.log(newStr.length + (!str.includes("LL") ? 0 : 1));
