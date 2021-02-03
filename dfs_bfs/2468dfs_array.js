// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['5',
'6 8 2 6 2',
'3 2 3 4 6',
'6 7 3 3 2',
'7 2 5 3 6',
'8 9 5 2 7',
]

const dfs = (graph, j, k) => {
    const stack = [];
    stack.push([j, k]);

    while(stack.length !== 0) {
        const [ x, y ] = stack.pop();
        for(let i = 0; i < xy.length; i++) {
            const nx = x + xy[i][0];
            const ny = y + xy[i][1];
            if(0 <= nx && nx < N && 0 <= ny && ny < N) {
                if(graph[nx][ny]) {
                    graph[nx][ny] = 0;
                    stack.push([nx, ny]);
                }
            }
        }
    }
}

const N = input[0].split(' ').map(e => parseInt(e));
const graph = new Array(N);
const newGraph = new Array(N);
const xy = [[1,0], [-1,0], [0,1], [0,-1]];
let max = 0;
let res = 0;

for (let i = 0; i < N; i++) {
    graph[i] = input[i + 1].split(' ').map(e => Number(e));
}

for(let i = 0; i < N; i++) {
    const newMax = Math.max(...graph[i]);
    if(newMax > max) {
        max = newMax;
    }
}

for(let i = 0; i < max; i++) {
    let newRes = 0;
    for(let j = 0; j < N; j++) {
        newGraph[j] = graph[j].map(e => e > i ? 1 : 0);
    }

    for(let j = 0; j < N; j++) {
        for(let k = 0; k < N; k++) {
            if(newGraph[j][k] === 1) {
                dfs(newGraph, j, k);
                newRes++;
            }
        }
    }

    if(newRes > res) {
        res = newRes;
    }
}

console.log(res);


