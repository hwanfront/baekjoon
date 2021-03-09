// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    '2',
    '5',
    '50 10 100 20 40',
    '30 50 70 10 60',
    '7',
    '10 30 10 50 100 20 40',
    '20 40 30 50 60 20 80',
];

// const input = [
// '2',
// '4',
// '50 40 19 18',
// '40 20 40 20',
// '4',
// '40 40 39 40',
// '40 40 40 40',
// ]

const T = Number(input[0]);
let idx = 1;

for (let i = 0; i < T; i++) {
    const n = Number(input[i * 3 + 1]);
    const first = input[i * 3 + 2].split(" ").map((e) => Number(e));
    const second = input[i * 3 + 3].split(" ").map((e) => Number(e));
    const resFirst = new Array(n);
    const resSecond = new Array(n);

    resFirst[0] = first[0];
    resSecond[0] = second[0];
    resFirst[1] = first[1] + second[0];
    resSecond[1] = second[1] + first[0];

    for (let i = 2; i < n; i++) {
        const case1 = resSecond[i - 1];
        const case2 = resSecond[i - 2]
        const case3 = resFirst[i - 1];
        const case4 = resFirst[i - 2]
        resFirst[i] = case1 > case2 ? case1 + first[i] : case2 + first[i];
        resSecond[i] = case3 > case4 ? case3 + second[i] : case4 + second[i];
    }

    console.log(Math.max(resFirst[n - 1], resSecond[n - 1]));
}
