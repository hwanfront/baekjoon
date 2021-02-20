// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    '7',
    '6',
    '1 2',
    '2 3',
    '1 5',
    '5 2',
    '5 6',
    '4 7',
];

const computer = Number(input[0]);
const link = Number(input[1]);
const map = new Map();
const visited = new Array(computer).fill(0);

for(let i = 0; i <= computer; i++) {
    map.set(i, []);
}

for(let i = 2; i < input.length; i++) {
    const [x,y] = input[i].split(" ").map((e) => Number(e));
    map.get(x).push(y);
    map.get(y).push(x);
}

const dfs = (num) => {
    visited[num] = 1;
    for(let i = 0; i < map.get(num).length; i++) {
        if(!visited[map.get(num)[i]]) {
            dfs(map.get(num)[i])
        }
    }

}

dfs(1) 
console.log(visited.reduce((a,b) => a+b)-1);