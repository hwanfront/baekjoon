const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = null;
let isInput = false;
let min = null;
let max = null;

rl.on("line", (c) => {
  if (!isInput) {
    count = c;
    isInput = !isInput;
  } else {
    const input = c.split(' ').map((e) => parseInt(e));
    max = min = input[0];
    for (let i = 1; i < count; i++) {
      if (input[i] > max) {
        max = input[i];
      }
      if (input[i] < min) {
        min = input[i];
      }
    }
    console.log(min + " " + max);
    rl.close();
  }
}).on("close", () => {
  process.exit();
});