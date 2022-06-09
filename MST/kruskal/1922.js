// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `6
9
1 2 5
1 3 4
2 3 2
2 4 7
3 4 6
3 5 11
4 5 3
4 6 8
5 6 8`


console.log(solution(input));

function solution (input) {
  const [item1, item2, ...rest] = input.split('\n');
  const n = Number(item1);
  const m = Number(item2);

  const edge = rest.map(e => {
    const [a, b, c] = e.split(' ').map(el => Number(el));
    return {node: [a, b], distance: c};
  }).sort((a, b) => a.distance - b.distance);

  const arr = new Array(n + 1).fill(0).map((_, idx) => idx);

  let res = 0;

  const find = (x) => {
    if(x === arr[x]) return x;
    arr[x] = find(arr[x])
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

    if(px === py) return true;
    return false;
  }
  
  for(let i = 0; i < edge.length; i++ ){
    if(!getSameParent(edge[i].node[0], edge[i].node[1])) {
      union(edge[i].node[0], edge[i].node[1]);
      res += edge[i].distance;
    }
  }

  return res;
}
