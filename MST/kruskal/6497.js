// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `7 11
0 1 7
0 3 5
1 2 8
1 3 9
1 4 7
2 4 5
3 4 15
3 5 6
4 5 8
4 6 9
5 6 11
7 11
0 1 7
0 3 5
1 2 8
1 3 9
1 4 7
2 4 5
3 4 15
3 5 6
4 5 8
4 6 9
5 6 11
0 0`

console.log(solution(input))

function solution(input) {
  let res = '';
  const myInput = input.split('\n');
  let idx = 0;


  while(myInput[idx] !== '0 0') {
    const [n, m] = myInput[idx++].split(' ').map(e => Number(e));
    const testCase = myInput
      .slice(idx, idx + m)
      .map(e => e.split(' ').map(el => Number(el)))
      .sort((a, b) => a[2] - b[2]);
    let total = 0;
    let sum = 0;

    const arr = new Array(n).fill(0).map((_, i) => Number(i));

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

    for(let i = 0; i < m; i++) {
      if(!getSameParent(testCase[i][0], testCase[i][1])) {
        union(testCase[i][0], testCase[i][1]);
        sum += testCase[i][2];
      }
      total += testCase[i][2];
    }
    idx += m;
    res += `${total - sum}\n`
  }

  return res.trim();
}