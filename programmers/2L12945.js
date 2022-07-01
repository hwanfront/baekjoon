function solution(n) {
  let a = 0;
  let b = 1;
  for (let i = 1; i < n; i++) {
    const tmp = a;
    a = b;
    b = (a + tmp) % 1234567;
  }
  return b;
}
