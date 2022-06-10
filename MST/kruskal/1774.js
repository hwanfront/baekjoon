// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `4 1
1 1
3 1
2 3
4 3
1 4`

console.log(solution(input));

function solution(input) {
  const [first, ...rest] = input.split('\n').map(e => e.split(' ').map(el => Number(el)));
  const [n, m] = first;
  const testCase = rest.slice(0, n);
  const connect = rest.slice(n);
  const edge = [];
  let res = 0;

  const arr = new Array(n + 1).fill(0).map((_, idx) => Number(idx));
  
  const find = (x) => {
    if(arr[x] === x) return x;
    arr[x] = find(arr[x]);
    return arr[x];
  }

  const union = (x, y) => {
    const px = find(x);
    const py = find(y);

    if(px > py) arr[px] = py;
    if(px < py) arr[py] = px;
  }

  const getSameParent = (x, y) => {
    const px = find(x);
    const py = find(y);
    return px === py;
  }

  const getDistance = ([ax, ay], [bx, by]) => Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));

  connect.forEach((e) => {
    union(e[0], e[1]);
  })

  for(let i = 0; i < n; i++) {
    for(let j = i + 1; j < n; j++) {
      edge.push([i + 1, j + 1, getDistance(testCase[i], testCase[j])]);
    }
  }

  edge.sort((a, b) => a[2] - b[2]);
  
  edge.forEach((e) => {
    if(!getSameParent(e[0], e[1])) {
      union(e[0], e[1]);
      res += e[2];
    }
  })
  
  return res.toFixed(2);
}