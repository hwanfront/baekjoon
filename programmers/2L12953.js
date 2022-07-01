const gcb = (a, b) => (b ? gcb(b, a % b) : a);
const lcm = (a, b) => (a * b) / gcb(a, b);

function solution(arr) {
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res = lcm(res, arr[i]);
  }
  return res;
}
