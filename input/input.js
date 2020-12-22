// (input)
// a b c d e
// input = [a, b, c, d, e];
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];

rl.on("line", function(c) {
  // c = "1 2 3"
  input = c.split(' ').map((el) => parseInt(el)); // => [1, 2, 3]
  input = c.split(''); // => ['1', ' ', '2', ' ', '3']
  rl.close();
}).on("close", function() {
  process.exit();
});


