// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = [
    '6',
    '6 12 10',
    '30 50 72',
    '10 10 91',
    '2 2 3',
    '1 1 1',
    '30 2 30',
];

const T = Number(input[0]);

for(let i = 0; i < T; i++) {
    let [H, W, N] = input[i+1].split(" ").map((e) => Number(e));
    let count = 1;
    while(N > H) {
        count++;
        N -= H;
    }
    console.log(N * 100 + count);
}
