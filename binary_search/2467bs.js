// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['4',
'-99 -4 2 98'
];

const N = parseInt(input.shift());
const arr = input[0].split(' ').map((e) => parseInt(e)).sort((a,b) => a-b);
let res = 200000000000;
let res1 = 0;
let res2 = 0;

for(let i = 0; i < N; i++) {
  let left = i+1;
  let right = N-1;

  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
    const abs = Math.abs(arr[i] + arr[mid]);
    if(abs < res) {
      res = abs;
      res1 = arr[i];
      res2 = arr[mid];
    }
    if(arr[i] + arr[mid] < 0) {
      left = mid + 1;
    }
    else {
      right = mid - 1;
    }
  }
}
console.log(res1 + ' ' + res2);