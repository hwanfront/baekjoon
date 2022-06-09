// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `3 3
1 2 1
2 3 2
1 3 3`


console.log(solution(input));

function solution (input) {
  const [item, ...rest] = input.split('\n');
  const [v, e] = item.split(' ').map(e => Number(e));

  const edge = rest.map(e => {
    const [a, b, c] = e.split(' ').map(el => Number(el));
    return {node: [a, b], distance: c};
  }).sort((a, b) => a.distance - b.distance);

  const arr = new Array(v + 1).fill(0).map((_, idx) => idx);

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
