// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `5 6
1
5 1 1
1 2 2
1 3 3
2 3 4
2 4 5
3 4 6`;

console.log(solution(input));

function solution(input) {
  const [first, second, ...rest] = input.split("\n");
  const [v, e] = first.split(" ").map((element) => Number(element));
  const start = Number(second);
  const test = rest.map((e) => e.split(" ").map((el) => Number(el)));
  const table = [];
  const INF = 1000000000;
  let res = "";

  const visit = new Array(v + 1).fill(0);
  const distance = new Array(v + 1).fill(INF);

  for (let i = 0; i <= v; i++) {
    table.push(
      new Array(v + 1).fill(INF).map((_, idx) => (idx === i ? 0 : INF))
    );
  }

  test.forEach((e) => {
    table[e[0]][e[1]] = e[2];
    table[e[1]][e[0]] = e[2];
  });

  distance[start] = 0;

  const getSmallIdx = () => {
    let min = INF;
    let idx = 0;
    for (let i = 0; i <= v; i++) {
      if (distance[i] < min && !visit[i]) {
        min = distance[i];
        idx = i;
      }
    }
    return idx;
  };

  const dijkstra = (start) => {
    for (let i = 0; i < v; i++) {
      distance[i] = table[start][i];
    }
    visit[start] = 1;
    for (let i = 0; i < v - 2; i++) {
      let current = getSmallIdx();
      visit[current] = 1;
      for (let j = 0; j < e; j++) {
        if (!visit[j]) {
          if (distance[current] + table[current][j] < distance[j]) {
            distance[j] = distance[current] + table[current][j];
          }
        }
      }
    }
  };
  dijkstra(start);

  for (let i = 1; i < distance.length; i++) {
    res += `${distance[i] < INF ? distance[i] : "INF"}\n`;
  }

  return res.trim();
}
