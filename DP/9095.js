// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const input = [
    '3',
    '4',
    '7',
    '10',
  ];
  
  const add = [1,2,4,7,13,24,44,81,149,274,504];
  const T = Number(input[0]);
  let res = "";
  
  for(let i = 0; i < T; i++) {
    res += add[input[i + 1]-1] + "\n";
  }
  
  console.log(res.trim());