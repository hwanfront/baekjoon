// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = [
//   '4',
//   '4 1 2 3',
//   '4 1 3 2',
// ]
const input = [
    '6',
    '5 2 4 1 6 3',
    '5 4 2 6 3 1',
];

// const input = [
//   '8',
//   '8 4 2 5 1 6 3 7',
//   '8 4 5 2 6 7 3 1',
// ]

const n = Number(input[0]);
const inOrderArr = input[1].split(" ").map((e) => Number(e));
const postOrderArr = input[2].split(" ").map((e) => Number(e));
const arr = [];
let result = "";

const preOrder = (inStart, inEnd, postStart, postEnd) => {
    if (postEnd < postStart || inEnd < inStart) return;
    const root = postOrderArr[postEnd];
    const inOrderRootIdx = inOrderArr.indexOf(root);
    result += root + " ";
    arr.push([inOrderRootIdx + 1, inEnd, postStart + (inOrderRootIdx - inStart), postEnd - 1]);
    arr.push([inStart, inOrderRootIdx - 1, postStart, postStart + inOrderRootIdx - 1 - inStart]);
}

preOrder(0, n - 1, 0, n - 1);
while (arr.length) {
    const [is, ie, ps, pe] = arr.pop();
    preOrder(is, ie, ps, pe);
}

console.log(result.trim());