const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const input = [];
let N = null;

rl.on("line", (c) => {
  solve(c);
}).on("close", () => {
  process.exit();
});

const solve = (c) => {
  if (!N) {
    N = parseInt(c);
  } 
  else {
    N--;
    input.push(c);
    if (N == 0) {
      const arr = mergeSort(input);
      let result = '';
      for(let i = 0; i < arr.length; i++) {
        result += arr[i] + '\n';
      }
      console.log(result);
      rl.close();
    }
  }
}

const mergeSort = (arr) => {
  if (arr.length === 1) {
      return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {

  const result = [];

  while(left.length && right.length) {
    Number(left[0]) < Number(right[0]) ? result.push(left.shift()) : result.push(right.shift());
  }
  while(left.length) {
    result.push(left.shift());
  }
  while(right.length) {
    result.push(right.shift());
  }
  return result;
}
