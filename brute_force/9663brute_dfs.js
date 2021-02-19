// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = '8';
const N = Number(input);
let count = 0;
const array = new Array(N).fill(0);

const dfs = (num) => {
    if(num === N) {
        count++;
    } else {
        for (let i = 0; i < N; i++) {
            array[num] = i;
            if(isPos(num)) {
                dfs(num + 1);
            }
        }
    }
}

const isPos = (num) => {
    for (let i = 0; i < num; i++) {
        if (array[num] === array[i] 
            || Math.abs(array[num] - array[i]) === num - i) {
            return false
        }
    }
    return true
}

dfs(0)
console.log(count);