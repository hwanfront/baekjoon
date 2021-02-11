const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on("line", (c) => {
  if (c == 0) {
    rl.close();
  }
  const input = c.split('');
  const len = input.length;
  for(let i = 0; i < len/2; i++) {
    if (input[i] != input[len - 1 - i]) {
      console.log("no");
      return;
    }
  }
  console.log("yes")
}).on("close", () => {
  process.exit();
});