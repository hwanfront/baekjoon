function solution(n) {
  let res = "";
  while (n > 0) {
    const rest = n % 3;
    res = (rest === 0 ? "4" : rest) + res;
    if (rest === 0) {
      n = Math.floor(n / 3) - 1;
    } else {
      n = Math.floor(n / 3);
    }
  }

  return res;
}
