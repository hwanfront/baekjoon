// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `10 15
5 1 3 5 10 7 4 9 2 8`;

const [first, last] = input.split("\n");
const [n, s] = first.split(" ").map(Number);
const numbers = last.split(" ").map(Number);

let i = 0;
let j = 0;
let sum = 0;
let res = 1000000;

while (1) {
  if (sum >= s) sum -= numbers[i++];
  else if (j === n) break;
  else sum += numbers[j++];
  if (sum >= s) res = Math.min(res, j - i);
}

console.log(res > 99999 ? 0 : res);
