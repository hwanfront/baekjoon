// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    '5',
    '7',
    '3 8',
    '8 1 0',
    '2 7 4 4',
    '4 5 2 6 5',
];

const n = Number(input[0]);
const arr = new Array(n);
arr[0] = input[1].split(" ").map((e) => Number(e));

for (let i = 1; i < n; i++) {
    const newArr = input[i + 1].split(" ").map((e) => Number(e));
    arr[i] = new Array(i + 1);
    for (let j = 0; j < i + 1; j++) {
        if (j === 0) arr[i][j] = arr[i - 1][j] + newArr[j];
        else if (j === i) arr[i][j] = arr[i - 1][j - 1] + newArr[j];
        else arr[i][j] = Math.max(arr[i - 1][j], arr[i - 1][j - 1]) + newArr[j];
    }
}
console.log(Math.max(...arr[n - 1]));