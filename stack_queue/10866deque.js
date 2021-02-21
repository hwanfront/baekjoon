const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Deque {
  constructor() {
    this.store = [];
    this.tp = 0;
  }

  push_front(item) {
    this.tp = this.tp + 1;
    this.store.unshift(item);
  }

  push_back(item) {
    this.tp = this.tp + 1;
    this.store.push(item);
  }

  pop_front() {
    if(this.tp === 0) {
      return '-1';
    } else {
      this.tp = this.tp - 1;
      return this.store.shift();
    }
  }

  pop_back() {
    if(this.tp === 0) {
      return '-1';
    } else {
      this.tp = this.tp - 1;
      return this.store.pop();
    }
  }

  size() {
    return this.tp;
  }

  front() {
    if(this.tp === 0) {
      return '-1';
    } else {
      return this.store[0];
    }
  }

  back() {
    if(this.tp === 0) {
      return '-1';
    } else {
      return this.store[this.tp-1];
    }
  }

  isEmpty() {
    if(this.tp === 0) {
      return '1';
    } else {
      return '0';
    }
  }
}

const stack = new Deque();
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

    if(input[0] == "push_front") {
      stack.push_front(input[1]);
    } else if (input[0] == "push_back") {
        stack.push_back(input[1]);
    } else if (input[0] == "pop_front") {
      res = res + stack.pop_front() + '\n';
    } else if (input[0] == "pop_back") {
      res = res + stack.pop_back() + '\n';
    } else if (input[0] == "front") {
      res = res + stack.front() + '\n';
    } else if (input[0] == "back") {
      res = res + stack.back() + '\n';
    } else if (input[0] == "size") {
      res = res + stack.size() + '\n';
    } else {
      res = res + stack.isEmpty() + '\n';
    }

    if (count === 0) {
      console.log(res);
      rl.close();
    }
  }
}).on("close", () => {
  process.exit();
});