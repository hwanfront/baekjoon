// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const input = [
    '5',
    '1 3 2 -1',
    '2 4 4 -1',
    '3 1 2 4 3 -1',
    '4 2 4 3 3 5 6 -1',
    '5 4 6 -1',
]

const V = Number(input[0]);
const node = new Array(V);
const visited = new Array(V);
let result = 0;
let newPoint = 1;

for (let i = 0; i < V + 1; i++) {
    node[i] = new Array();
    visited[i] = false;
}

for (let i = 0; i < V; i++) {
    const arr = input[i + 1].split(" ").map((e) => Number(e));
    for (let j = 0; j < arr.length / 2 - 1; j++) {
        node[arr[0]].push([arr[j * 2 + 1], arr[j * 2 + 2]]);
    }
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
for (let i = 0; i < V + 1; i++) {
    visited[i] = false;
}

dfs(newPoint, 0);
console.log(result);
