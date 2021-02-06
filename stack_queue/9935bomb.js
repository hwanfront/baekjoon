// 문자열 폭발 - 속도문제
const fs = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const input = fs[0].split('');
const bomb = fs[1].split('');
const res = [];
let ans = '';

for (let i = 0; i < input.length; i++) {
  if (input[i] == bomb[bomb.length - 1]) {
    if (isBomb(res.length)) {
      for (let j = 0; j < bomb.length - 1; j++) {
        res.pop();
      }
    }
    else {
      res.push(input[i]);
    }
  }
  else {
    res.push(input[i]);
  }
}

for (let i = 0; i < res.length; i++) {
  ans += res[i]
}

console.log(res.length == 0 ? "FRULA" : ans);


const isBomb = (len) => {
  for (let i = 0; i < bomb.length - 1; i++) {
    if (res[len - 1 - i] != bomb[bomb.length - 2 - i]) {
      return false;
    }
  }
  return true;
}
