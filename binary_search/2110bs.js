// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['5 3',
'1',
'2',
'8',
'4',
'9',
'11'
];

const fst = input.shift().split(' ').map((e)=>parseInt(e));
const N = fst[0];
const C = fst[1];
const xi = input.map((e) => parseInt(e)).sort((a,b) => a-b);
let left = 1;
let right = xi[N-1]-xi[0];
let res = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  let cnt = 1;
  let guess = xi[0];

  for(let i = 1; i < N; i++) {
    if(xi[i] - guess >= mid) {
      cnt++;
      guess = xi[i];
    }
  }

  if(cnt >= C) {
    res = mid;
    left = mid+1;
  }
  else {
    right = mid-1;
  }
}
console.log(res);