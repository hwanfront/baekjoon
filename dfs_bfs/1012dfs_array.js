// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['2',
    '10 8 17',
    '0 0',
    '1 0',
    '1 1',
    '4 2',
    '4 3',
    '4 5',
    '2 4',
    '3 4',
    '7 4',
    '8 4',
    '9 4',
    '7 5',
    '8 5',
    '9 5',
    '7 6',
    '8 6',
    '9 6',
    '10 10 1',
    '5 5',
];
// const input = ['1',
//     '5 3 6',
//     '0 2',
//     '1 2',
//     '2 2',
//     '3 2',
//     '4 2',
//     '4 0',
// ];

let T = Number(input[0]);
let cnt = 1;

const dfs = (graph, x, y) => {
    if (graph[x][y] === 1) {
        graph[x][y] = 0;
        if(y < graph[x].length-1) dfs(graph, x, y + 1);
        if(y > 0) dfs(graph, x, y - 1);
        if(x > 0) dfs(graph, x - 1, y);
        if(x < graph.length-1) dfs(graph, x + 1, y);
    }
}

while(T--) {
    const [ M, N, K ] = input[cnt++].split(' ').map(e => parseInt(e));
    const graph = new Array(N);
    res = 0;
    for(let i = 0; i < N; i++) {
        graph[i] = new Array(M).fill(0);
    }
    
    for(let i = cnt; i < cnt + K; i++) {
        const [x, y] = input[i].split(' ').map(e => Number(e));
        graph[y][x] = 1;
    }

    for(let i = 0; i < graph.length; i++) {
        for(let j = 0; j < graph[i].length; j++) {
            if (graph[i][j] === 1) {
                console.log(graph);
                dfs(graph, i, j);
                res++;
            }
        }
    }
    console.log(res);
    cnt += K;
}
