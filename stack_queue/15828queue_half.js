const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let isBf = false;
let bfSize = null;
let bf = [];
let res = '';

rl.on("line", function(c) {
  if (!isBf) {
    bfSize = parseInt(c);
    isBf = !isBf;
  }
  else if (c == '-1') {
    if(bf.length == 0) {
      console.log('empty')
    }
    else {
      res = res + bf[0];
      for (let i = 1; i < bf.length; i++) {
        res = res + ' ' + bf[i];
      }
      console.log(res);
    }
    
    rl.close();
  } 
  else if (c == '0') {
    bf.shift();
  }
  else {
    if (bf.length != bfSize) {
      bf.push(c);
    }
  }
}).on("close", function() {
  process.exit();
});
