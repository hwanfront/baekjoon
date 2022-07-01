function solution(N, stages) {
  const arr = new Array(N + 1).fill(0);
  let cnt = stages.length;
  stages.forEach((e) => arr[e - 1]++);
  arr.pop();
  const failureRate = arr.map((e, i) => {
    const res = e / cnt;
    cnt -= e;
    return [i + 1, res];
  });
  const sortedFailureRate = failureRate.sort((a, b) => b[1] - a[1]);
  const failureRank = sortedFailureRate.map((e) => e[0]);
  return failureRank;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
