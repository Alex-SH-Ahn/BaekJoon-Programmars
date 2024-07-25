const input = require("fs")
            .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
            .toString()
            .trim()
            .split("\n")
            .map((el) => el.split(" ").map(Number))

let result = {};
let team = ['A', 'B', 'C', 'D', 'E', 'F'];
let allMatch = [];

for (let i = 0; i < 6; i++) {
  for (let j = i + 1; j < 6; j++) {
    allMatch.push([team[i], team[j]]);
  }
}

let position = {'A': 0, 'B': 3, 'C': 6, 'D': 9, 'E': 12, 'F': 15};

function match(depth, note, answer) {
  if (depth === 15) {
    result[JSON.stringify(note)] = true;
    return;
  }

  for (let i = 0; i < note.length; i++) {
    if (note[i] > answer[i]) {
      return;
    }
  }

  let [a, b] = allMatch[depth];
  let aIDX = position[a];
  let bIDX = position[b];

  // 승
  let note_win = note.slice();
  note_win[aIDX] += 1;
  note_win[bIDX + 2] += 1;
  match(depth + 1, note_win, answer);

  // 무
  let note_draw = note.slice();
  note_draw[aIDX + 1] += 1;
  note_draw[bIDX + 1] += 1;
  match(depth + 1, note_draw, answer);

  // 패
  let note_lose = note.slice();
  note_lose[aIDX + 2] += 1;
  note_lose[bIDX] += 1;
  match(depth + 1, note_lose, answer);
}

let answers = [];
for (let i = 0; i < 4; i++) {
  let answer = input[i].map(Number);
  match(0, Array(18).fill(0), answer);

  if (JSON.stringify(answer) in result) {
    answers.push(1);
  } else {
    answers.push(0);
  }
}

console.log(...answers);