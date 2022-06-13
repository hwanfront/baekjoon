// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `6 5
0 1
1 2
1 3
0 3
4 5`;

console.log(solution(input));

function solution(input) {
  const [first, ...rest] = input.split("\n");
  const [n, m] = first.split(" ").map((e) => Number(e));
  const edge = rest.map((e) => e.split(" ").map((el) => Number(el)));
  const arr = new Array(n + 1).fill(0).map((_, idx) => idx);
  let res = 0;

  const find = (x) => {
    if (x === arr[x]) return x;
    arr[x] = find(arr[x]);
    return arr[x];
  };

  const union = (x, y) => {
    const px = find(x);
    const py = find(y);
    if (px > py) arr[px] = py;
    if (py > px) arr[py] = px;
  };

  const getSameParent = (x, y) => {
    const px = find(x);
    const py = find(y);
    return px === py;
  };

  for (let i = 0; i < edge.length; i++) {
    if (!getSameParent(edge[i][0], edge[i][1])) {
      union(edge[i][0], edge[i][1]);
      res++;
    } else {
      return ++res;
    }
  }
  return 0;
}
