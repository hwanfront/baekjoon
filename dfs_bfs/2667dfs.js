// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    '7',
    '0110100',
    '0110101',
    '1110101',
    '0000111',
    '0100000',
    '0111110',
    '0111001',
];

const x = [0, -1, 1, 0];
const y = [-1, 0, 0, 1];

const N = Number(input[0]);
const arr = new Array(N);
let count = 0;
const res = [];

for(let i = 0; i < N; i++) {
    arr[i] = input[1 + i].split("").map((e) => Number(e));
}

const dfs = (j, k) => {
    let house = 0;
    const stack = [];
    stack.push([j, k]);

    while (stack.length) {
        const [mx, my] = stack.pop();
        for (let i = 0; i < x.length; i++) {
            const nx = mx + x[i];
            const ny = my + y[i];
            if (0 <= nx && nx < N && 0 <= ny && ny < N) {
                if (arr[nx][ny]) {
                    house++;
                    arr[nx][ny] = 0;
                    stack.push([nx, ny]);
                }
            }
        }
    }
    if(house) {
        res.push(house);
        return;
    }
    res.push(++house);
}

for(let i = 0; i < N; i++) {
    for(let j = 0; j < N; j++) {
        if(arr[i][j]) {
            count++;
            dfs(i, j);
        }
    }
}

console.log(count);
console.log(res.sort((a,b) => a-b).join("\n").trim());