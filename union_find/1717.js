// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
// const input = `7 8
// 0 1 3
// 1 1 7
// 0 7 6
// 1 7 1
// 0 3 7
// 0 4 2
// 0 1 1
// 1 1 1`

// console.log(solution(input));

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let n = null;
let m = null;
let arr = [];
let res = '';

const find = (x) => {
  if(x === arr[x]) {
    return x;
  }
  arr[x] = find(arr[x])
  return arr[x];
}

const union = (x, y) => {
  const px = find(x);
  const py = find(y);
  
  if(px > py) arr[px] = py;
  if(px < py) arr[py] = px;
}

rl.on("line", (c) => {
  if (!n) { // 반복 횟수 입력
    [n, m] = c.split(' ').map(e => +e);
    arr = new Array(n + 1).fill(0).map((_, idx) => idx);
    return;
  } 
  const [type, a, b] = c.split(' ').map(el => +el);
  if(type === 0) {
    union(a, b);
  } else {
    if(find(a) === find(b)) {
      res += "YES\n";
    } else {
      res += "NO\n";
    }
  }
  m--;

  if (m === 0) {
    rl.close();
  }
}).on("close", () => {
  console.log(res.trim());
  process.exit();
});

// function solution(input) {
//   const [first, ...rest] = input.split('\n');
//   const [n, m] = first.split(' ').map(e => +e);
//   const arr = new Array(n + 1).fill(0).map((_, idx) => idx);
//   let res = '';

//   const find = (x) => {
//     if(x === arr[x]) {
//         return x;
//     }
//     arr[x] = find(arr[x])
//     return arr[x];
//   }

//   const union = (x, y) => {
//       const px = find(x);
//       const py = find(y);
      
//       if(px > py) arr[px] = py;
//       if(px < py) arr[py] = px;
//   }

//   rest.forEach(e => {
//     const [type, a, b] = e.split(' ').map(el => +el);
//     if(type === 0) {
//       union(a, b);
//       return;
//     }
//     if(find(a) === find(b)) {
//       res += "YES\n";
//     } else {
//       res += "NO\n";
//     }
//   });

//   return res.trim();
// }
