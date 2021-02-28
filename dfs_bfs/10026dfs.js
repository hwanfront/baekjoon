// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    '5',
    'RRRBB',
    'GGBBB',
    'BBBRR',
    'BBRRR',
    'RRRRR',
];

const N = Number(input[0]);
const arr = new Array(N);
const visited = new Array(N);
const x = [0, -1, 1, 0];
const y = [-1, 0, 0, 1];
let res1 = 0;
let res2 = 0;

for (let i = 0; i < N; i++) {
    arr[i] = input[i + 1].split("");
    visited[i] = new Array(N).fill(false);
}

const dfs1 = (j, k) => {
    if (visited[j][k]) {
        return;
    }
    const stack = [];
    const color = arr[j][k];
    stack.push([j, k]);
    res1++;

    while (stack.length) {
        const [mx, my] = stack.pop();
        for (let i = 0; i < x.length; i++) {
            const nx = mx + x[i];
            const ny = my + y[i];
            if (0 <= nx && nx < N && 0 <= ny && ny < N) {
                if (arr[nx][ny] === color && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    stack.push([nx, ny]);
                }
            }
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        dfs1(i, j);
    }
}

///////////////////////////////////////////////////////

for (let i = 0; i < N; i++) {
    visited[i] = new Array(N).fill(false);
}

const dfs2 = (j, k) => {
    if (visited[j][k]) {
        return;
    }
    const stack = [];
    const color = arr[j][k];
    stack.push([j, k]);
    res2++;

    while (stack.length) {
        const [mx, my] = stack.pop();
        for (let i = 0; i < x.length; i++) {
            const nx = mx + x[i];
            const ny = my + y[i];
            if (0 <= nx && nx < N && 0 <= ny && ny < N) {
                if (color === "B") {
                    if (arr[nx][ny] === "B" && !visited[nx][ny]) {
                        visited[nx][ny] = true;
                        stack.push([nx, ny]);
                    }
                } else {
                    if (arr[nx][ny] > "B" && !visited[nx][ny]) {
                        visited[nx][ny] = true;
                        stack.push([nx, ny]);
                    }
                }
            }
        }
    }
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        dfs2(i, j);
    }
}

console.log(res1 + " " + res2);
