// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `20`;
const n = Number(input);
const arr = new Array(n + 1).fill(0).map((_, i) => i);

for (let i = 2; i <= n; i++) {
  if (arr[i] === 0) continue;
  for (let j = i + i; j <= n; j += i) {
    arr[j] = 0;
  }
}

const numbers = arr.filter((e) => e);
let sum = 0;
let i = 1;
let j = 1;
let res = 0;

while (1) {
  if (sum >= n) sum -= numbers[i++];
  else if (j === numbers.length) break;
  else sum += numbers[j++];
  if (sum === n) res++;
}

console.log(res);
