// 연결리스트
const dfs = (num) => {
    res.push(num);
    visited[num] = true;
    for (let i = 0; i < graph[num].length; i++) {
        if (!visited[graph[num][i]]) {
            dfs(graph[num][i]);
        }
    }
};

// Array 4방향
const dfs = (graph, x, y) => {
    if (graph[x][y] === 1) {
        graph[x][y] = 0;
        if(y < graph[x].length-1) dfs(graph, x, y + 1);
        if(y > 0) dfs(graph, x, y - 1);
        if(x > 0) dfs(graph, x - 1, y);
        if(x < graph.length-1) dfs(graph, x + 1, y);
    }
}

const xy = [[1,0], [-1,0], [0,1], [0,-1]];
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

// Array 8방향
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
