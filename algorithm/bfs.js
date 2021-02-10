const bfs = (num) => {
    const queue = [];
    queue.push(num);
    visited[num] = true;
    while (queue.length) {
        const v = queue.shift();
        res.push(v);
        for (let i = 0; i < graph[v].length; i++) {
            if (!visited[graph[v][i]]) {
                queue.push(graph[v][i]);
                visited[graph[v][i]] = true;
            }
        }
    }
}
