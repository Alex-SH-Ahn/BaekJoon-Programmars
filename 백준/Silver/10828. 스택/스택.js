const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((v) => v.split(" "));
const N = +input[0][0];
const stack = [];
const answer = [];

for (let i = 0; i < N; i++) {
    const [command] = input[i+1];
    switch (command) {
        case 'push':
            let num = +input[i+1][1];
            stack.push(num);
            break;
        case 'pop':
            if (stack.length === 0) {
                answer.push(-1);
                break;
            } else {
                const num = stack.pop();
                answer.push(num);
                break;
            }
        case 'size':
            answer.push(stack.length);
            break;
        case 'empty':
            answer.push(stack.length === 0 ? 1 : 0);
            break;
        case 'top':
            answer.push(stack.length ===  0 ? -1 : stack.at(-1));
            break;
        default:
            break;
    }
}

console.log(answer.join('\n'));
