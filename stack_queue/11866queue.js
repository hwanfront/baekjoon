const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let arr = [];
let res = "<";

rl.on("line", function(c) {
  input = c.split(' ').map((el) => parseInt(el));
  let i;
  for (i = 1; i < input[0] + 1; i++) {
    arr.push(i);
  }
  for(i = 0; i < input[1]-1; i++) {
    arr.push(arr.shift());
  }
  res = res + arr.shift();
  while(arr.length) {
    for(i = 0; i < input[1]-1; i++) {
      arr.push(arr.shift());
    }
    res = res + ', ' + arr.shift() ;
  }
  res = res + '>';
  console.log(res);
  rl.close();
}).on("close", function() {
  process.exit();
});


