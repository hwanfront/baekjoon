// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `2
3 3
1 2
2 3
1 3
5 4
2 1
2 3
4 3
4 5`


console.log(solution(input));

function solution (input) {
  const [first, ...rest] = input.split('\n');
  let t = +first;
  let i = 0;
  let res = '';
  while(t--) {
    const [n, m] = rest[i].split(' ').map(e => +e);
    res += `${n - 1}\n`;
    i += m + 1;
  }
  return res.trim();
}
