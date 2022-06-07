// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `3
1 5 7`

solution(input);

function solution (input) {
  const [input1, input2] = input.split('\n');
  const k = +input1;
  const weight = input2.split(' ').map(e => +e);
  const s = weight.reduce((pre, cur) => pre + cur, 0);
  const set = new Set();

  const bf = (i, w) => {
    if(i > k) return;
    set.add(w);
    bf(i + 1, w + weight[i]);
    bf(i + 1, Math.abs(w - weight[i]));
    bf(i + 1, w);
  }

  bf(0, 0);

  console.log(s - set.size + 1);
}
