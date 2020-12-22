// (input)
// ... 
// 0 => close
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on("line", function(c) {
  if (c == 0) { 
    rl.close();
  }
  input = c.split('');
}).on("close", function() {
  process.exit();
});