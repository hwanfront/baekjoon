// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const input = [
    '12',
    '1 2 3',
    '1 3 2',
    '2 4 5',
    '3 5 11',
    '3 6 9',
    '4 7 1',
    '4 8 7',
    '5 9 15',
    '5 10 4',
    '6 11 6',
    '6 12 10',
]

const n = Number(input[0]);
const node = new Array(n);
const visited = new Array(n);
let result = 0;
let newPoint = 1;

for (let i = 0; i < n + 1; i++) {
    node[i] = new Array();
    visited[i] = false;
}

for (let i = 0; i < n - 1; i++) {
    const [parent, child, len] = input[i + 1].split(" ").map((e) => Number(e));
    node[parent].push([child, len]);
    node[child].push([parent, len]);
}

const dfs = (point, len) => {
    const stack = [];
    stack.push([point, len]);

    while (stack.length) {
        const now = stack.pop();

        if (visited[now[0]]) {
            continue;
        }

        visited[now[0]] = true;

        if (result < now[1]) {
            result = now[1];
            newPoint = now[0];
        }

        for (let i = 0; i < node[now[0]].length; i++) {
            stack.push([node[now[0]][i][0], now[1] + node[now[0]][i][1]]);
        }
    }
}

dfs(1, 0);
for (let i = 0; i < n + 1; i++) {
    visited[i] = false;
}

dfs(newPoint, 0);
console.log(result);
