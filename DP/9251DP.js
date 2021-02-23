// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    'ACAYKP',
    'CAPCAK',
];

const arr1 = input[0].split('');
const arr2 = input[1].split('');
const length1 = arr1.length;
const length2 = arr2.length;
const lcs = new Array(length1 + 1);

for (let i = 0; i <= length1; i++) {
    lcs[i] = new Array(length2 + 1).fill(0);
}

for (let i = 1; i <= length1; i++) {
    for (let j = 1; j <= length2; j++) {
        if (arr1[i - 1] === arr2[j - 1]) {
            lcs[i][j] = lcs[i - 1][j - 1] + 1;
        } else {
            lcs[i][j] = lcs[i - 1][j] > lcs[i][j - 1] ? lcs[i - 1][j] : lcs[i][j - 1];
        }
    }
}

// console.log(lcs.join("\n"));

console.log(lcs[length1][length2]);