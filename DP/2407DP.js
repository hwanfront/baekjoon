// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = '100 50';

const [n, m] = input.split(' ').map(e => Number(e));
const arr1 = [];
const arr2 = [];

for(let i = 0; i < m; i++) {
  arr1[i] = BigInt(n - i);
  arr2[i] = BigInt(i + 1);
}

const multiplication = (arr) => {
  return arr.reduce((a,b) => a * b);
}

const nume = multiplication(arr1);
const deno = multiplication(arr2);

console.log((nume / deno).toString());
