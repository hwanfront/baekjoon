// 쇠막대기
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", (c) => {
  input = c.split('');
  let count = 0;
  let res = 0;
  let begin = '';
  while (input.length) {
    if (input.shift() == '(') {
      count++;
      begin = '(';
    }
    else {
      if(begin == '(') {
        count--;
        res += count;
      }
      else {
        count--;
        res += 1;
      }
      begin = ')';
    }
  }

  console.log(res);
  rl.close();
}).on("close", () => {
  process.exit();
});

