// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = ['9',
//   '7 3',
//   '7',
//   '1 2',
//   '1 3',
//   '2 7',
//   '2 8',
//   '2 9',
//   '4 5',
//   '4 6',
// ];

// const input = ['3',
//   '2 3',
//   '2',
//   '1 2',
//   '1 3'
// ]

const input = ['7',
    '4 7',
    '6',
    '1 2',
    '1 3',
    '2 4',
    '2 5',
    '2 6',
    '3 7',
]

const bfs = (num) => {
    const queue = [];
    queue.push(num);
    visited[num] = 0;
    while (queue.length) {
        const v = queue.shift();
        for (let i = 0; i < graph[v].length; i++) {
            if (!visited[graph[v][i]]) {
                visited[graph[v][i]] = visited[v] + 1;
                queue.push(graph[v][i]);
            }
        }
    }
};

const n = parseInt(input[0]);
const [x1, x2] = input[1].split(' ').map(e => parseInt(e));
const m = parseInt(input[2]);

const graph = Array(n + 1);
const visited = Array(n + 1);

for (let i = 0; i < n + 1; i++) {
    graph[i] = [];
    visited[i] = 0;
}

for (let i = 3; i < m + 3; i++) {
    const [x, y] = input[i].split(' ').map(e => parseInt(e));
    graph[x].push(y);
    graph[y].push(x);
}

graph.forEach(e => e.sort((a, b) => a - b));
bfs(x1);

if (visited[x2]) {
    console.log(visited[x2]);
}
else {
    console.log(-1);
}