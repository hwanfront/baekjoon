const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let input = [];
let isInput = false;
let count;
let res = '';

rl.on("line", function(c) {
  if (!isInput) { // 반복 횟수 입력
    count = parseInt(c);
    isInput = !isInput;
  } else {  // 반복 입력
    count--;
    input = c.split('');
    if (input.length % 2 == 1) {
      res = res + "NO\n"
    }
    else {
      let i = 0;
      while(input.length) {
        if (input.shift() == '(') {
          i++;
        } 
        else {
          i--;
        }

        if(i == -1) {
          break;
        }
      }
      if ( i == 0 ) { 
        res = res + 'YES\n';
      } 
      else {
        res = res + 'NO\n';
      }
    }
    
    if (count == 0) {
      console.log(res);
      rl.close();
    }
  }

}).on("close", function() {
  process.exit();
});

