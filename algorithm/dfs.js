const dfs = (num) => {
    res.push(num);
    visited[num] = true;
    for (let i = 0; i < graph[num].length; i++) {
        if (!visited[graph[num][i]]) {
            dfs(graph[num][i]);
        }
    }
};

const dfs = (graph, x, y) => {
    if (graph[x][y] === 1) {
        graph[x][y] = 0;
        if(y < graph[x].length-1) dfs(graph, x, y + 1);
        if(y > 0) dfs(graph, x, y - 1);
        if(x > 0) dfs(graph, x - 1, y);
        if(x < graph.length-1) dfs(graph, x + 1, y);
    }
}

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