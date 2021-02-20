// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = [
    '10',
    '6 3 2 10 10 10 -10 -10 7 3',
    '8',
    '10 9 -5 2 3 4 5 -10',
];

const N = Number(input[0]);
const card = input[1].split(" ").map((e) => Number(e));
const M = Number(input[2]);
const find = input[3].split(" ").map((e) => Number(e));
const map = new Map();
let res = [];

for(let i = 0; i < N; i++) {
    if(!map.get(card[i])) {
        map.set(card[i], 0);
    }
    map.set(card[i], map.get(card[i])+1);
}

for(let i = 0; i < M; i++) {
    const result = map.get(find[i]);
    if(result) {
        res.push(result);
    } else {
        res.push(0);
    }
}

console.log(res.join(" ").trim());