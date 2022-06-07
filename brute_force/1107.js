// const fs = require('fs').readFileSync('/dev/stdin').toString().trim();
const fs = `500000
10
0 1 2 3 4 5 6 7 8 9`
const [input1, input2, input3] = fs.split('\n');
const n = parseInt(input1);
const m = parseInt(input2);
const MAX_VALUE = 999999;

console.log(solution(n, m, input3));

function solution(n, m, input3) {
  if(n === 100) return 0;
  const btn = m !== 0 ? input3.split(' ').map(e => parseInt(e)) : [];
  const broken = new Array(10).fill(false);
  btn.forEach(e => broken[e] = true);

  let cnt = Math.abs(n - 100);
  for(let i = 0; i < MAX_VALUE; i++) {
    if(m === 10) break;
    const click = bf(i, broken);
    if(click === -1) continue;
    cnt = Math.min(cnt, click + Math.abs(n - i));
  }

  return cnt;
}

function bf(num, broken) {
  const str = num.toString();
  let click = 0;
  for(let i = 0; i < str.length; i++) {
    if(broken[parseInt(str[i])]) {
      return -1;
    }
    click++;
  }
  return click;
}



/*
77777 => 5
2223
*/