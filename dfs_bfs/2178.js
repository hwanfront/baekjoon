// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    '4 6',
    '101111',
    '101010',
    '101011',
    '111011',
    ];
    
    // const input = [
    // '4 6',
    // '110110',
    // '110110',
    // '111111',
    // '111101',
    // ];
    
    // const input = [
    // '2 25',
    // '1011101110111011101110111',
    // '1110111011101110111011101',
    // ];
    
    // const input = [
    // '7 7',
    // '1011111',
    // '1110001',
    // '1000001',
    // '1000001',
    // '1000001',
    // '1000001',
    // '1111111',
    // ];
    
    
    const xy = [[1,0], [-1,0], [0,1], [0,-1]];
    const [N, M] = input[0].split(' ').map(e => Number(e));
    const data = new Array(N);
    const visited = new Array(N);
    let res = 1;
    
    for(let i = 0; i < N; i++) {
        data[i] = input[i+1].split('').map(e => Number(e));
        visited[i] = new Array(M).fill(0);
    }
    visited[0][0] = 1;
    console.log(data);
    
    
    const dfs = (graph, j, k) => {
        const stack = [];
        stack.push([j, k]);
    
        while(graph[N-1][M-1]) {
            const [ x, y ] = stack.pop();
            for(let i = 0; i < xy.length; i++) {
                const nx = x + xy[i][0];
                const ny = y + xy[i][1];
                if(0 <= nx && nx < N && 0 <= ny && ny < M) {
                    if(graph[nx][ny]) {
                        graph[nx][ny] = 0;
                        stack.push([nx, ny]);
                        res++;
                    }
                    console.log(data);
                }
            }
        }
    }
    
    dfs(data, 0, 0)
    console.log(res);