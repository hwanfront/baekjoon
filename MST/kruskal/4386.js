// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const input = `3
1.0 1.0
2.0 2.0
2.0 4.0`;

console.log(solution(input));

function solution(input) {
  const [first, ...rest] = input.split("\n");
  const n = Number(first);
  const point = rest.map((e) => e.split(" ").map((el) => Number(el)));

  let res = 0;
  const testCase = [];
  const arr = new Array(n + 1).fill(0).map((_, idx) => idx);

  const getDistance = ([ax, ay], [bx, by]) =>
    Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      testCase.push([i, j, getDistance(point[i], point[j])]);
    }
  }

  testCase.sort((a, b) => a[2] - b[2]);

  const find = (x) => {
    if (arr[x] === x) return x;
    arr[x] = find(arr[x]);
    return arr[x];
  };

  const union = (x, y) => {
    const px = find(x);
    const py = find(y);

    if (px > py) arr[px] = py;
    if (px < py) arr[py] = px;
  };

  testCase.forEach((e) => {
    if (find(e[0]) !== find(e[1])) {
      union(e[0], e[1]);
      res += e[2];
    }
  });

  return res.toFixed(2);
}
