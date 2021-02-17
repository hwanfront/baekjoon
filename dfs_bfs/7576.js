// 토마토
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['6 4',
    '0 0 0 0 0 0',
    '0 0 0 0 0 0',
    '0 0 0 0 0 0',
    '0 0 0 0 0 1',
];

// const input = ['6 4',
//     '0 -1 0 0 0 0',
//     '-1 0 0 0 0 0',
//     '0 0 0 0 0 0',
//     '0 0 0 0 0 1',
// ];

// const input = ['6 4',
//     '1 -1 0 0 0 0',
//     '0 -1 0 0 0 0',
//     '0 0 0 0 -1 0',
//     '0 0 0 0 -1 1',
// ];

// const input = ['5 5',
//     '-1 1 0 0 0',
//     '0 -1 -1 -1 0',
//     '0 -1 -1 -1 0',
//     '0 -1 -1 -1 0',
//     '0 0 0 0 0',
// ];

// const input = ['2 2',
//     '1 -1',
//     '-1 1',
// ];

// const input = ['2 1',
// '1 0',
// ]

const bfs = (start) => {
    while(start.length) {
        const p = start.shift();
        const x = p[0];
        const y = p[1];
        for(let i = 0; i < draw.length; i++) {
            const nx = x + draw[i][0];
            const ny = y + draw[i][1];
            if(0 <= nx && nx < N
                && 0 < ny && ny < M) {
                }
        }
    }
}



const [M, N] = input[0].split(' ').map(e => Number(e));
const draw = [[1,0], [-1,0], [0,1], [0,-1]]; 

const graph = new Array(N);
const start = [];
let res = -1;

for (let i = 0; i < N; i++) {
    graph[i] = input[i + 1].split(' ').map(e =>Number(e));
    const t = graph[i].indexOf(1);
    if(t !== -1) {
        start.push([i, t]);
    }
}

bfs(start);

console.log(graph);

for(let i = 0; i < N; i++) {
    if(graph[i].indexOf(0) !== -1) {
        res = -1;
        break;
    }
}

console.log(res);