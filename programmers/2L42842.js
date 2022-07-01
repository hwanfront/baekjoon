function solution(brown, yellow) {
  const arr = [];
  for (let i = 1; i <= yellow / i; i++) {
    if (yellow % i === 0) {
      arr.push([i, yellow / i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    const sum = (arr[i][0] + arr[i][1]) * 2 + 4;
    if (sum === brown) return [arr[i][1] + 2, arr[i][0] + 2];
  }
}
