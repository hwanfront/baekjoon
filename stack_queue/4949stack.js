const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let res = '';

rl.on("line", function(c) {
  if (c == '.') {
    console.log(res);
    rl.close();
  }
  input = c.split('');
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] == '(' || input[i] == '[') {
      arr.push(input[i]);
    }
    else if (input[i] == ')') {
      if (arr.length == 0 || arr[arr.length-1] != '(') {
        return res = res + 'no\n';
      }
      else {
        arr.pop();
      }
    }
    else if (input[i] == ']') {
      if (arr.length == 0 || arr[arr.length-1] != '[') {
        return res = res + 'no\n';
      }
      else {
        arr.pop();
      }
    }
  }
  if (arr.length == 0) {
    res = res + 'yes\n';
  }
  else {
    res = res + 'no\n';
  }

}).on("close", function() {
  process.exit();
});

