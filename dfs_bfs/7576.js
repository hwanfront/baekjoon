// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `6 4
0 -1 0 0 0 0
-1 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1`

console.log(solution(input));

function solution (input) {
  const [first, ...rest] = input.split('\n');
  const [m, n] = first.split(' ').map(e => +e);
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const box = [];

  rest.forEach(e => {
    box.push(e.split(' '));
  })

  let arr = [];
  let cnt = 0;
  let res = 0;

  for(let i = 0; i < box.length; i++) {
    for(let j = 0; j < box[0].length; j++) {
      if(box[i][j] === '1') {
        cnt++;
        arr.push([i, j]);
      }
    }
  }

  while(arr.length) {
    const curCnt = cnt;
    const newArr = [];
    arr.forEach(e => {
      const [x, y] = e;

      for(let i = 0; i < 4; i++) {
        const xx = x + dx[i];
        const yy = y + dy[i];
  
        if(0 <= xx && xx < n && 0 <= yy && yy < m) {
          if(box[xx][yy] === '0') {
            box[xx][yy] = '1';
            cnt++;
            newArr.push([xx, yy]);
          }
        }
      }
    })
    if(curCnt === cnt) break;
    res++;
    arr = [...newArr];
  }

  for(let i = 0; i < box.length; i++) {
    for(let j = 0; j < box[0].length; j++) {
      if(box[i][j] === '0') {
        return -1;
      }
    }
  }

  return res;
}
