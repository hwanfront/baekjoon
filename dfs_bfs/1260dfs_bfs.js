const dfs = (num) => {
  res.push(num);
  visited[num] = true;
  for (let i = 0; i < graph[num].length; i++) {
    if (!visited[graph[num][i]]) {
      dfs(graph[num][i]);
    }
  }
};

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
};

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = ['5 5 3',
  '5 4',
  '5 2',
  '1 2',
  '3 4',
  '3 1',
];

const [N, M, V] = input.shift().split(' ').map(x => { return Number(x) });;
const graph = Array(N + 1);
const visited = Array(N + 1);
let res = [];


for (let i = 0; i < N + 1; i++) {
  graph[i] = [];
  visited[i] = false;
}
for (let i = 0; i < M; i++) {
  const [a, b] = input[i].split(' ').map(e => parseInt(e));
  graph[a].push(b);
  graph[b].push(a);
}
graph.forEach(e => e.sort((a, b) => a - b));

dfs(V);
for (let i = 0; i < N + 1; i++) {
  visited[i] = false;
}
console.log(res.join(' '));
res = [];
bfs(V);
console.log(res.join(' '));