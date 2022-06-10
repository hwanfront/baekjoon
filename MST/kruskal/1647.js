// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `7 12
1 2 3
1 3 2
3 2 1
2 5 2
3 4 4
7 3 6
5 1 5
1 6 2
6 4 1
6 5 3
4 5 3
6 7 4`

console.log(solution(input));

function solution (input) {
  const [first, ...rest] = input.split('\n');
  const [n, m] = first.split(' ').map(e => Number(e));
  const info = rest.map(e => e.split(' ').map(el => Number(el))).sort((a, b) => a[2] - b[2]);
  const arr = new Array(n + 1).fill(0).map((_, idx) => idx);
  let res = 0;
  let cur = 0;

  const find = (x) => {
    if(x === arr[x]) return x;
    arr[x] = find(arr[x])
    return arr[x];
  }

  const union = (x, y) => {
    const px = find(x);
    const py = find(y);
    if(px > py) arr[px] = py;
    if(py > px) arr[py] = px;
  }

  const getSameParent = (x, y) => {
    const px = find(x);
    const py = find(y);
    return px === py;
  }

  for(let i = 0; i < info.length; i++) {
    if(!getSameParent(info[i][0], info[i][1])) {
      union(info[i][0], info[i][1]);
      res += info[i][2];
      cur = info[i][2];
    }
  }
  return res - cur;
}