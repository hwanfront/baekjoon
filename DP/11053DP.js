// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    '6',
    '10 20 5 30 20 50',
]

const N = Number(input[0]);
const A = input[1].split(" ").map((e) => Number(e));
const res = new Array(N).fill(1);

for (let i = 0; i < N; i++) {
    const arr = [];
    for (let j = 0; j < i; j++) {
        if (A[j] < A[i]) arr.push(res[j]);
    }
    if (arr.length) res[i] = Math.max(...arr) + 1;
}

console.log(Math.max(...res));