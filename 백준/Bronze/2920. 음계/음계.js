const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (input[0] === 1) {
  let isAscending = true;
  for (let i = 1; i <= 7; i++) {
    if (input[i] === i+1) continue;
    else {
      isAscending = false;
      break;
    }
  }
  if (isAscending) {
    console.log("ascending");
    return;
  }
}

if (input[0] === 8) {
  let j = 1;
  let isDescending = true;
  for (let i = 7; i > 0; i--) {
    if (input[j] === i) {
      j++;
      continue;
    } else {
      isDescending = false;
      break;
    }
  }
  if (isDescending) {
    console.log("descending");
    return;
  }
}

console.log("mixed");