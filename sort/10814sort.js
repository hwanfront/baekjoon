// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    '3',
    '21 Junkyu',
    '21 Dohyun',
    '20 Sunyoung',
];

const N = Number(input[0]);
const arr = new Array(N);
let res = "";

for(let i = 0; i < N; i++) {
    arr[i] = input[i + 1].split(" ");
    arr[i][0] = Number(arr[i][0]);
}

arr.sort((a, b) => a[0] - b[0]);

for(let i = 0; i < N; i++) {
    res += arr[i].join(" ") + "\n";
}

console.log(res.trim());