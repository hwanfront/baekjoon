const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Queue {
  constructor() {
    this.store = [];
    this.tp = 0;
  }

  push(item) {
    this.tp = this.tp + 1;
    this.store.push(item);
  }

  pop() {
    if(this.tp === 0) {
      return '-1';
    } else {
      this.tp = this.tp - 1;
      return this.store.shift();
    }
  }

  size() {
    return this.tp;
  }

  isEmpty() {
    if(this.tp === 0) {
      return '1';
    } else {
      return '0';
    }
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
}

const queue = new Queue();
let isInput = false;
let count;
let res = '';
rl.on("line", (c) => {
  if (!isInput) { 
    count = parseInt(c);
    isInput = !isInput;
  } else {
    count--;
    const input = c.split(' ');

    if(input[0] == "push") {
        queue.push(input[1]);
    } else if (input[0] == "pop") {
      res = res + queue.pop() + '\n';
    } else if (input[0] == "front") {
      res = res + queue.front() + '\n';
    } else if (input[0] == "back") {
      res = res + queue.back() + '\n';
    } else if (input[0] == "size") {
      res = res + queue.size() + '\n';
    } else {
      res = res + queue.isEmpty() + '\n';
    }

    if (count == 0) {
      console.log(res);
      rl.close();
    }
  }
}).on("close", () => {
  process.exit();
});