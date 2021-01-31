// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = '4 4';

const [N, M] = input.split(' ').map(e => Number(e));

const visited = new Array(N).fill(false);
const res = [];
const stack = [];

const dfs = (num) => {
    if(stack.length === M) {
        console.log(stack.join(' '));
    }
    for (let i = num; i < N; i++) {
        if (!visited[i]) {
            for(let j = 0; j < i; j++) {
                visited[j] = true;
            }
            visited[i] = true;
            stack.push(i+1);
            dfs(num++);
            for(let j = 0; j < i; j++) {
                visited[j] = false;
            }
            visited[i] = false;
            stack.pop();
        }
    }
};

dfs(0);