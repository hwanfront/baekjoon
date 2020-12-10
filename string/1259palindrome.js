const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let len = null;

rl.on("line", function(c) {
  if (c == 0) {
    rl.close();
  }
  input = c.split('');
  len = input.length;
  for(let i = 0; i < len/2; i++) {
    if (input[i] != input[len - 1 - i]) {
      console.log("no");
      return;
    }
  }
  console.log("yes")
}).on("close", function() {
  process.exit();
});