// (input)
// a b c d e
// input = [...];
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (c) => {                       // c = "1 2 3"
  const input = c.split(' ').map((e) => Number(e));   // => [1, 2, 3]
  // const input = c.split(' ');                           // => ['1', '2', '3']
  // const input = c.split('');                            // => ['1', ' ', '2', ' ', '3']
  input.push(c);                                  // => ['1 2 3']
  rl.close();
}).on("close", () => {
  process.exit();
});


