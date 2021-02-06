// 괄호의 값
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Stack {
  constructor() {
    this.store = [];
    this.tp = 0;
  }

  push(item) {
    this.tp = this.tp + 1;
    this.store.push(item);
  }

  pop() {
    if (this.tp === 0) {
      return -1;
    } else {
      this.tp = this.tp - 1;
      return this.store.pop();
    }
  }

  size() {
    return this.tp;
  }

  top() {
    if (this.tp === 0) {
      return -1;
    } else {
      return this.store[this.tp - 1];
    }
  }

  isEmpty() {
    if (this.tp === 0) {
      return 1;
    } else {
      return 0;
    }
  }
}

const input = [];
let sum = 1;
let res = 0;
let isClosed = false;
const s = new Stack;

rl.on("line", (c) => {
  input = c.split('');
  while (input.length) {
    if (input[0] == '(' || input[0] == '[') {
      if (input[0] == '(') {
        sum *= 2;
      }
      else {
        sum *= 3;
      }
      isClosed = false;
      s.push(input.shift());
    }
    else if (input[0] == ')' && s.top() != '(') {
      console.log(0);
      rl.close();
    }
    else if (input[0] == ']' && s.top() != '[') {
      console.log(0);
      rl.close();
    }
    else if (input[0] == ')' || input[0] == ']') {
      if (isClosed) {
        if (input[0] == ')') {
          sum /= 2;
        }
        else {
          sum /= 3;
        }
      }
      else {
        if (input[0] == ')') {
          res += sum;
          sum /= 2;
        }
        else {
          res += sum;
          sum /= 3;
        }
        isClosed = !isClosed;
      }
      input.shift();
      s.pop();
    }
  }

  if (s.isEmpty()) {
    console.log(res);
  }
  else {
    console.log(0);
  }

  rl.close();
}).on("close", () => {
  process.exit();
});
