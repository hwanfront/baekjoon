// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    '20',
    '7',
    '23',
    '19',
    '10',
    '15',
    '25',
    '8',
    '13',
];

input.map(e => Number(e)).sort((a,b) => a-b);
const N = 9;
const data = input.map(e => Number(e)).sort((a,b) => a-b);
const visited = new Array(N).fill(false);
const stack = [];

const dfs = () => {
    if(stack.length === 7) {
        const sum = stack.reduce((a,b) => a + b);
        if(sum === 100) {
            console.log(stack.join('\n'));
            process.exit();
        }
    }
    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            stack.push(data[i]);
            visited[i] = true;
            dfs();
            stack.pop();
            visited[i] = false;
        }
    }
};

dfs();