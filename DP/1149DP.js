// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    '3',
    '26 40 83',
    '49 60 57',
    '13 89 99',
];

const N = Number(input[0]);
const arr = new Array(N);
arr[0] = input[1].split(" ").map((e) => Number(e));

for (let i = 1; i < N; i++) {
    const newArr = input[i + 1].split(" ").map((e) => Number(e));
    arr[i] = new Array(3);
    arr[i][0] = newArr[0] + Math.min(arr[i - 1][1], arr[i - 1][2]);
    arr[i][1] = newArr[1] + Math.min(arr[i - 1][0], arr[i - 1][2]);
    arr[i][2] = newArr[2] + Math.min(arr[i - 1][0], arr[i - 1][1]);
}

console.log(Math.min(...arr[N - 1]));