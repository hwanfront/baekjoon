// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `100 40021`;

console.log(solution(input));

function solution(input) {
  let [a, b] = input.split(" ").map((e) => Number(e));
  let res = 0;
  while (1) {
    res++;
    if (b === a) return res;
    if (b < a) return -1;
    if (b % 2 === 0) {
      b /= 2;
      continue;
    }
    if (b % 10 === 1) {
      b -= 1;
      b /= 10;
      continue;
    }
    return -1;
  }
}
