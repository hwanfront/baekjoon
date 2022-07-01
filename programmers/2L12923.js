function solution(begin, end) {
  const arr = new Array(end - begin + 1).fill(0);
  for (let i = begin; i <= end; i++) {
    let num = 1;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0 && i / j <= 10000000) {
        num = i / j;
        break;
      }
    }
    arr[i - begin] = num;
  }
  if (begin === 1) arr[0] = 0;
  return arr;
}
