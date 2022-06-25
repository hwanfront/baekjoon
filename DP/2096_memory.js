const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = -1;
let max = [0, 0, 0];
let min = [0, 0, 0];

rl.on("line", (c) => {
  if (n === -1) {
    n = Number(c);
    return;
  }
  const arr = c.split(" ").map(Number);
  const minArr = [];
  const maxArr = [];

  minArr.push(arr[0] + Math.min(min[0], min[1]));
  maxArr.push(arr[0] + Math.max(max[0], max[1]));
  minArr.push(arr[1] + Math.min(...min));
  maxArr.push(arr[1] + Math.max(...max));
  minArr.push(arr[2] + Math.min(min[1], min[2]));
  maxArr.push(arr[2] + Math.max(max[1], max[2]));

  min[0] = minArr[0];
  max[0] = maxArr[0];
  min[1] = minArr[1];
  max[1] = maxArr[1];
  min[2] = minArr[2];
  max[2] = maxArr[2];

  n--;
  if (n === 0) {
    rl.close();
  }
}).on("close", () => {
  console.log(`${Math.min(...min)} ${Math.max(...max)}`);
  process.exit();
});

// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
// const input = `3
// 1 2 3
// 4 5 6
// 4 9 0`;

// const [first, ...rest] = input.split("\n");
// const n = Number(first);
// const arr = rest.map((e) => e.split(" ").map(Number));
// const pre = [0, 0, 0];
// const min = [];
// const max = [];
// let res = "";

// arr.forEach((e, i) => {
//   if (!i) {
//     min.push(e);
//     return;
//   }
//   const newArr = e.map((el, idx) => {
//     if (idx === 0) return el + Math.min(min[0], min[1]);
//     if (idx === 1) return el + Math.min(...min);
//     if (idx === 2) return el + Math.min(min[1], min[2]);
//   });
//   min.push(newArr);
// });

// arr.forEach((e, i) => {
//   if (!i) {
//     max.push(e);
//     return;
//   }
//   const newArr = e.map((el, idx) => {
//     if (idx === 0) return el + Math.max(max[0], max[1]);
//     if (idx === 1) return el + Math.max(...max);
//     if (idx === 2) return el + Math.max(max[1], max[2]);
//   });
//   max.push(newArr);
// });

// res += `${Math.max(...max.pop())} `;
// res += `${Math.min(...min.pop())} `;

// console.log(res.trim());
