// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((e) => e.split(" ").map((el) => Number(el)));

const input = [
    '4 4',
    '1 2 3 4',
    '2 3 4 5',
    '3 4 5 6',
    '4 5 6 7',
    '2 2 3 4',
    '3 4 3 4',
    '1 1 4 4',
    '1 2 3 4',
].map((e) => e.split(" ").map((el) => Number(el)));

// const input = [
// '2 4',
// '1 2',
// '3 4',
// '1 1 1 1',
// '1 2 1 2',
// '2 1 2 1',
// '2 2 2 2',
// ].map((e) => e.split(" ").map((el) => Number(el)));

const [N, M] = input[0]
const table = new Array(N);
let result = "";

for (let i = 0; i < N; i++) {
    table[i] = new Array(N).fill(0);
}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        const value = input[i + 1][j];

        if (!i && !j) table[i][j] = value;
        else if (!i) table[i][j] = table[i][j - 1] + value;
        else if (!j) table[i][j] = table[i - 1][j] + value;
        else table[i][j] = table[i - 1][j] + table[i][j - 1] - table[i - 1][j - 1] + value;
    }
}

for (let i = 0; i < M; i++) {
    const t = i + N + 1;
    const x1 = input[i + N + 1][0] - 1;
    const y1 = input[i + N + 1][1] - 1;
    const x2 = input[i + N + 1][2] - 1;
    const y2 = input[i + N + 1][3] - 1;

    if (!y1 && !x1) result += table[x2][y2] + "\n";
    else if (!y1) result += (table[x2][y2] - table[x1 - 1][y2]) + "\n";
    else if (!x1) result += (table[x2][y2] - table[x2][y1 - 1]) + "\n";
    else result += (table[x2][y2] - table[x2][y1 - 1] - table[x1 - 1][y2] + table[x1 - 1][y1 - 1]) + "\n";
}

console.log(result.trim());
