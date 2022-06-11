// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `5
11 -15 -15
14 -5 -15
-1 -1 -5
10 -4 -1
19 -4 19`;

console.log(solution(input));

function solution(input) {
  const [first, ...rest] = input.split("\n");
  const n = Number(first);
  const xArr = [];
  const yArr = [];
  const zArr = [];
  rest.forEach((e, idx) => {
    const [x, y, z] = e.split(" ").map((el) => Number(el));
    xArr.push([idx, x]);
    yArr.push([idx, y]);
    zArr.push([idx, z]);
  });

  let res = 0;
  const edge = [];
  const arr = new Array(n + 1).fill(0).map((_, idx) => Number(idx));

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

  const getSameParent = (x, y) => {
    const px = find(x);
    const py = find(y);
    return px === py;
  };

  xArr.sort((a, b) => a[1] - b[1]);
  yArr.sort((a, b) => a[1] - b[1]);
  zArr.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < n - 1; i++) {
    edge.push([xArr[i + 1][0], xArr[i][0], xArr[i + 1][1] - xArr[i][1]]);
    edge.push([yArr[i + 1][0], yArr[i][0], yArr[i + 1][1] - yArr[i][1]]);
    edge.push([zArr[i + 1][0], zArr[i][0], zArr[i + 1][1] - zArr[i][1]]);
  }

  edge.sort((a, b) => a[2] - b[2]);

  edge.forEach((e) => {
    if (!getSameParent(e[0], e[1])) {
      union(e[0], e[1]);
      res += e[2];
    }
  });

  return res;
}
