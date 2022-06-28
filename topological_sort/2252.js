// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `4 2
4 2
3 1`;

const [first, ...rest] = input.split("\n");
const [n, m] = first.split(" ").map(Number);
const compareList = rest.map((e) => e.split(" ").map(Number));

const arr = new Array(n + 1).fill(0);
const graph = [];
const distance = new Array(n + 1).fill(0);
const queue = [];

let res = "";

distance[0] = -1;

for (let i = 0; i <= n; i++) {
  graph.push([]);
}

compareList.forEach((e) => {
  graph[e[0]].push(e[1]);
  distance[e[1]] += 1;
});

distance.forEach((e, i) => {
  if (!e) {
    queue.push(i);
  }
});

while (queue.length) {
  const num = queue.shift();
  res += `${num} `;
  graph[num].forEach((e) => {
    distance[e] -= 1;
    if (!distance[e]) {
      queue.push(e);
    }
  });
}

console.log(res.trim());
