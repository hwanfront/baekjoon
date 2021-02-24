// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((e) => Number(e));

const input = [
    '12',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '40',
].map((e) => Number(e));

const T = input[0];
let res0 = 0;
let res1 = 0;

// const fibonacci = (n) => {
//   if (!n) {
//     res0++;
//     return 0;
//   } else if (n === 1) {
//     res1++;
//     return 1;
//   } else {
//     return fibonacci(n-1) + fibonacci(n-2);
//   }
// }

const fibonacci = (n) => {
    if (!n) {
        res0 = 1;
        res1 = 0;
        return;
    }
    else if (n === 1) {
        res0 = 0;
        res1 = 1;
        return;
    }

    res0 = 1;
    res1 = 1;

    for (let i = 2; i < n; i++) {
        const newRes = res1;
        res1 = res0 + res1;
        res0 = newRes;
    }

}

for (let i = 0; i < T; i++) {
    res0 = 0;
    res1 = 0;
    fibonacci(input[i + 1], res0, res1);
    console.log(res0 + " " + res1);
}

