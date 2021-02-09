// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [ '6 5',
  '1 2',
  '2 5',
  '5 1',
  '3 4',
  '4 6',
];

// const input = [ '6 8',
// '1 2',
// '2 5',
// '5 1',
// '3 4',
// '4 6',
// '5 4',
// '2 4',
// '2 3',
// ];

const dfs = (num) => {
  visited[num] = result;
  for (let i = 0; i < graph[num].length; i++) {
      if (!visited[graph[num][i]]) {
          dfs(graph[num][i]);
      }
  }
};

// const bfs = (num) => {
//   const queue = [];
//   queue.push(num);
//   visited[num] = result;
//   while (queue.length) {
//     const v = queue.shift();
//     for(let i = 0; i < graph[v].length; i++) {
//       if (!visited[graph[v][i]]) {
//         visited[graph[v][i]] = result;
//         queue.push(graph[v][i]);
//       }
//     }
//   }
// };

const [N, M] = input[0].split(' ').map(e => parseInt(e));
let result = 0;

const graph = Array(N + 1);
const visited = Array(N + 1);

for (let i = 0; i < N + 1; i++) {
  graph[i] = [];
  visited[i] = 0;
}

for (let i = 1; i < M + 1; i++) {
  const [x, y] = input[i].split(' ').map(e => parseInt(e));
  graph[x].push(y);
  graph[y].push(x);
}

graph.forEach(e => e.sort((a,b) => a-b));

for(let i = 1; i < N + 1; i++) {
  if(!visited[i]) {
    result++;
    dfs(i);
  }
}

console.log(Math.max(...visited));
