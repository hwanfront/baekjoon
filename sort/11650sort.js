// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = [
    '5',
    '3 4',
    '1 1',
    '1 -1',
    '2 2',
    '3 3',
];

const N = Number(input[0]);
const arr = new Array(N);
let res = "";

for(let i = 0; i < N; i++) {
    arr[i] = input[i + 1].split(" ").map((e) => Number(e));
}

arr.sort((a, b) => {
    if(a[0] === b[0]) {
        return a[1] - b[1];
    }
    return a[0] - b[0];
});

for(let i = 0; i < N; i++) {
    res += arr[i].join(" ") + "\n";
}

console.log(res.trim());