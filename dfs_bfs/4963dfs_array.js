const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const dfs = (graph, x, y) => {
    if (graph[x][y] === 1) {
        graph[x][y] = 0;
        if(0 < y && 0 < x) dfs(graph, x-1, y-1);
        if(0 < y && x < graph.length-1) dfs(graph, x+1, y-1);
        if(y < graph[x].length-1 && 0 < x) dfs(graph, x-1, y+1);
        if(y < graph[x].length-1 && x < graph.length-1) dfs(graph, x+1, y+1);

        if(0 < y) dfs(graph, x, y - 1);
        if(y < graph[x].length-1) dfs(graph, x, y + 1);
        if(0 < x) dfs(graph, x - 1, y);
        if(x < graph.length-1) dfs(graph, x + 1, y);
    }
}

let cnt = 0;

while(1) {
    const [ w, h ] = input[cnt++].split(' ').map(e => parseInt(e));

    if(!w && !h) {
        break;
    }

    const graph = new Array(h);
    res = 0;

    for(let i = 0; i < h; i++) {
        graph[i] = input[cnt + i].split(' ').map(e => Number(e));
    }

    for(let i = 0; i < graph.length; i++) {
        for(let j = 0; j < graph[i].length; j++) {
            if (graph[i][j] === 1) {
                dfs(graph, i, j);
                res++;
            }
        }
    }
    console.log(res);
    cnt += h;
}
