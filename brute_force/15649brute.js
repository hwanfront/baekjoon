// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = '4 4';

const [N, M] = input.split(' ').map(e => Number(e));

const visited = new Array(N).fill(false);
const stack = [];

const dfs = () => {
    if(stack.length === M) {
        console.log(stack.join(' '));
    }
    for (let i = 0; i < N; i++) {
        if (!visited[i]) {
            visited[i] = true;
            stack.push(i+1);
            dfs();
            visited[i] = false;
            stack.pop();
        }
    }
};

dfs();