// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const first = input[0].split(' ');
const N = parseInt(first[0]);
const M = parseInt(first[1]);
const arr = input[1].split(' ').map((e) => parseInt(e));

const binarySearch = (target, arr) => {
  let low = 0;
  let high = arr.reduce((a,b) => {return Math.max(a,b)}); 
  let result = 0;

  while(low <= high) {
    const mid = Math.floor((low + high) / 2);
    const sum = arrSum(arr, mid);
    
    if (sum >= target) {
      low = mid + 1;
      result = mid;
    }
    else {
      high = mid - 1;
    }
  }
  return result;
}

const arrSum = (arr, height) => {
  let res = 0;
  arr.forEach(e => {
    if(e > height) {
       res += e - height; 
      }
  });
  return res;
}

console.log(binarySearch(M,arr))
