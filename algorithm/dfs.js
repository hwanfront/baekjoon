const dfs = (num) => {
    res.push(num);
    visited[num] = true;
    for (let i = 0; i < graph[num].length; i++) {
        if (!visited[graph[num][i]]) {
            dfs(graph[num][i]);
        }
    }
};
