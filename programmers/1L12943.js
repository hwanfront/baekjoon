function solution(num) {
  var answer = 0;
  let cnt = 0;
  let res = num;
  if (num === 1) return 0;
  while (cnt <= 500) {
    cnt++;
    if (res % 2 === 0) res /= 2;
    else res = res * 3 + 1;
    if (res === 1) return cnt;
  }
  return -1;
}
