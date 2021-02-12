// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
    '5 0',
    '-7 -3 -2 5 8',
];

const [N, S] = input[0].split(' ').map(e => Number(e));
const data = input[1].split(' ').map(e => Number(e));
const visited = new Array(N).fill(false);
const stack = [];
let res = 0;

const dfs = () => {
    if (stack.length) {
        if (stack.reduce((a, b) => a + b) === S) {
            res++;
        }
    }
    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            stack.push(data[i]);
            for (let j = 0; j <= i; j++) {
                visited[j] = true;
            }
            dfs();
            stack.pop();
            for (let j = 0; j <= i; j++) {
                visited[j] = false;
            }
        }
    }
};

dfs();
console.log(res);