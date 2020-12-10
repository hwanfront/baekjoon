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
    if(this.tp == 0) {
      return '-1';
    } else {
      this.tp = this.tp - 1;
      return this.store.pop();
    }
  }

  size() {
    return this.tp;
  }

  top() {
    if(this.tp == 0) {
      return '-1';
    } else {
      return this.store[this.tp-1];
    }
  }

  isEmpty() {
    if(this.tp == 0) {
      return '1';
    } else {
      return '0';
    }
  }
}

const stack = new Stack();
let input = [];
let isInput = false;
let count;
let res = '';
rl.on("line", function(c) {
  if (!isInput) { 
    count = parseInt(c);
    isInput = !isInput;
  } else {
    count--;
    input = c.split(' ');

    if(input[0] == "push") {
      stack.push(input[1]);
    } else if (input[0] == "pop") {
      res = res + stack.pop() + '\n';
    } else if (input[0] == "top") {
      res = res + stack.top() + '\n';
    } else if (input[0] == "size") {
      res = res + stack.size() + '\n';
    } else {
      res = res + stack.isEmpty() + '\n';
    }

    if (count == 0) {
      console.log(res);
      rl.close();
    }
  }
}).on("close", function() {
  process.exit();
});