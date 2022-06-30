function solution(nums) {
  const res = [];
  const visited = new Array(nums.length).fill(false);
  const num = new Array(3000).fill(0).map((_, i) => i);
  const arr = [];

  for (let i = 2; i < num.length; i++) {
    if (!num[i]) {
      continue;
    }
    for (let j = i + i; j < num.length; j += i) {
      num[j] = 0;
    }
  }
  const prime = num.filter((e) => e);

  const dfs = () => {
    if (arr.length === 3) {
      const sum = arr.reduce((acc, cur) => acc + cur, 0);
      if (prime.includes(sum)) {
        res.push(sum);
      }
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        for (let j = 0; j < i; j++) {
          visited[j] = true;
        }
        visited[i] = true;
        arr.push(nums[i]);
        dfs();
        for (let j = 0; j < i; j++) {
          visited[j] = false;
        }
        visited[i] = false;
        arr.pop();
      }
    }
  };

  dfs();

  return res.length;
}

const res = solution([1, 2, 7, 6, 4]);
console.log(res);
