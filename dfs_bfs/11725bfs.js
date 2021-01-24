// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['7',
'1 6',
'6 3',
'3 5',
'4 1',
'2 4',
'4 7'
];

const bfs = (num) => {
  const queue = [];
  queue.push(num);
  visited[num] = true;
  while (queue.length) {
    const v = queue.shift();
    for(let i = 0; i < graph[v].length; i++) {
      if (!visited[graph[v][i]]) {
        queue.push(graph[v][i]);
        visited[graph[v][i]] = v;
      }
    }
  }
};

const N = parseInt(input.shift());
const graph = Array(N + 1);
const visited = Array(N + 1);
let res = '';

for (let i = 0; i < N + 1; i++) {
  graph[i] = [];
  visited[i] = false;
}
for (let i = 0; i < N - 1; i++) {
  const [a, b] = input[i].split(' ').map(e => parseInt(e));
  graph[a].push(b);
  graph[b].push(a);
}
graph.forEach(e => e.sort((a,b) => a-b));

bfs(1);
for(let i = 2; i < visited.length; i++) {
  res += visited[i] + '\n';
}

console.log(res.trim());