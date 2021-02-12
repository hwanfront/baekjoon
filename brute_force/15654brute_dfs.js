// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['4 4',
    '1231 1232 1233 1234'
];

const [N, M] = input[0].split(' ').map(e => Number(e));
const data = input[1].split(' ').map(e => Number(e)).sort((a,b) => a-b);

const visited = new Array(N).fill(false);
const stack = [];
let res = '';

const dfs = () => {
    if(stack.length === M) {
        res += stack.join(' ') + '\n'
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
console.log(res)