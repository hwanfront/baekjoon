// (input)
// 3
// ... 3 회 input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count;
let isInput = false

rl.on("line", function(c) {
  if (!isInput) { // 반복 횟수 입력
    count = parseInt(c);
    isInput = !isInput;
  } else {  // 반복 입력
    count--;
    if (count == 0) {
      rl.close();
    }
  }
}).on("close", function() {
  process.exit();
});