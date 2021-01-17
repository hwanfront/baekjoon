// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['4',
  '120 110 140 150',
  '485'
];
const N = input.shift();
const arr = input.shift().split(' ').map(e=>parseInt(e));
const M = +input[0];

const binarySearch = (target, arr) => {
  let low = 0;
  let high = arr.reduce((a,b) => {return Math.max(a,b)}); 
  let result = 0;

  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    const sum = moneySum(arr, mid);
    if (sum <= target) {
      result = mid;
      low = mid + 1;
    }
    else {
      high = mid - 1;
    }
  }
  return result;
}

const moneySum = (arr, height) => {
  let res = 0;
  arr.forEach(e => {
    res += Math.min(e, height);
  });
  return res;
}

console.log(binarySearch(M, arr))