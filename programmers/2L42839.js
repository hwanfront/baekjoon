function solution(numbers) {
  const max = numbers
    .split("")
    .sort((a, b) => b - a)
    .reduce((acc, cur) => acc + cur, "");
  const visited = new Array(numbers.length).fill(false);
  const maxNumber = Number(max);
  const prime = new Array(maxNumber + 1).fill(true);

  prime[0] = false;
  prime[1] = false;

  for (let i = 2; i < prime.length; i++) {
    if (prime[i]) {
      for (let j = i + i; j < prime.length; j += i) {
        prime[j] = false;
      }
    }
  }

  const arr = [];
  const cnt = new Set();
  const getArrNumber = (arr) => Number(arr.reduce((acc, cur) => acc + cur, ""));

  const dfs = () => {
    const newNumber = getArrNumber(arr);
    if (prime[newNumber]) {
      cnt.add(newNumber);
    }
    for (let i = 0; i < numbers.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        arr.push(numbers[i]);
        dfs();
        visited[i] = false;
        arr.pop();
      }
    }
  };

  dfs();

  return cnt.size;
}
