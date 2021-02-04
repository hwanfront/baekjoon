const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (c) => {
  console.log(c.charCodeAt(0))

  rl.close();
}).on("close",() => {
  process.exit();
});