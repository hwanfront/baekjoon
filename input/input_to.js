// (input)
// ... 
// f => close
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
const f = 0;

rl.on("line", (c) => {
  if (Number(c) === f) { 
    console.log(input);
    rl.close();
  }
  input.push(c);
}).on("close", () => {
  process.exit();
});