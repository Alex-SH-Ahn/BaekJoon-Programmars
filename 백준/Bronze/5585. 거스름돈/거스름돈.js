const input = Number(require('fs')
  .readFileSync(process.platform === "linux" ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(" ")[0]);

const changes = [500, 100, 50, 10, 5, 1];

function minChange(price) {

  const change = 1000 - price;
  let rest = change;
  let cnt = 0;

  for (let i = 0; i < changes.length; i++) {
    let num = Math.floor(rest / changes[i]);
    rest -= num * changes[i];
    cnt += num;
  }

  return cnt;
}

console.log(minChange(input));