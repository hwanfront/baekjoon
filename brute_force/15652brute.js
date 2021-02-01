// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = '3 3';

const [N, M] = input.split(' ').map(e => Number(e));
const visited = new Array(N).fill(false);
let res = '';
const stack = [];

const dfs = (num) => {
    if(stack.length === M) {
        res += stack.join(' ') + '\n'
        return;
    }
    for (let i = num; i < N; i++) {
        if (!visited[i]) {
            stack.push(i+1);
            dfs(num++);
            stack.pop();
        }
    }
};

dfs(0);
console.log(res)