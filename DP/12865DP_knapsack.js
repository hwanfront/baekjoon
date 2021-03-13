// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const input = [
    '4 7',
    '6 13',
    '4 8',
    '3 6',
    '5 12',
]

const [N, K] = input[0].split(" ").map((e) => Number(e));
const data = new Array(N);
const arr = new Array(N + 1);

for (let i = 0; i < N; i++) {
    arr[i] = new Array(K + 1).fill(0);
    data[i] = input[i + 1].split(" ").map((e) => Number(e));
}
arr[N] = new Array(K + 1).fill(0);

data.sort((a, b) => a[0] / a[1] - b[0] / b[1]);

for (let i = 0; i < N; i++) {
    for (let j = 0; j <= K; j++) {
        arr[i + 1][j] = arr[i][j];
        if (j - data[i][0] >= 0) {
            arr[i + 1][j] = Math.max(arr[i + 1][j], arr[i][j - data[i][0]] + data[i][1]);
        }
    }
}

console.log(arr[N][K]);