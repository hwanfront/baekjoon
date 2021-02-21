// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    '8 19',
    '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
    '0 0 0 1 0 0 0 1 0 0 0 1 0 1 1 1 1 1 0',
    '0 0 1 0 1 0 0 1 1 0 0 1 0 0 0 1 0 0 0',
    '0 1 0 0 0 1 0 1 0 1 0 1 0 0 0 1 0 0 0',
    '0 1 1 1 1 1 0 1 0 1 0 1 0 0 0 1 0 0 0',
    '0 1 0 0 0 1 0 1 0 0 1 1 0 0 0 1 0 0 0',
    '0 1 0 0 0 1 0 1 0 0 0 1 0 0 0 1 0 0 0',
    '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
];

const x = [-1, 0, 1, -1, 1, -1, 0, 1];
const y = [-1, -1, -1, 0, 0, 1, 1, 1];

const [M, N] = input[0].split(" ");
const arr = new Array(M);
let count = 0;

for(let i = 0; i < M; i++) {
    arr[i] = input[1 + i].split(" ").map((e) => Number(e));
}

const dfs = (j, k) => {
    const stack = [];
    stack.push([j, k]);

    while (stack.length) {
        const [mx, my] = stack.pop();
        for (let i = 0; i < x.length; i++) {
            const nx = mx + x[i];
            const ny = my + y[i];
            if (0 <= nx && nx < M && 0 <= ny && ny < N) {
                if (arr[nx][ny]) {
                    arr[nx][ny] = 0;
                    stack.push([nx, ny]);
                }
            }
        }
    }
}

for(let i = 0; i < M; i++) {
    for(let j = 0; j < N; j++) {
        if(arr[i][j]) {
            dfs(i, j);
            count++;
        }
    }
}

console.log(count);