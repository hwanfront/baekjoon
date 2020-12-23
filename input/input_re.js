// (input)
// N
// ... N 회 input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let N = null;
let input = [];
let isInput = false

rl.on("line", function(c) {
  if (!isInput) { // 반복 횟수 입력

    N = parseInt(c);
    isInput = !isInput;
  } 
  else {  // 반복 입력
    N--;
    input.push(c);

    if (N == 0) {
      console.log(input);
      rl.close();
    }
  }
}).on("close", function() {
  process.exit();
});