class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor(size) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.size = size;
  }

  setSize(size) {
    this.size = size;
  }

  isEmpty() {
    return !this.head;
  }

  enqueue(data) {
    if (this.size === this.length) return;
    const tmp = this.tail;
    this.tail = new Node(data);
    this.length += 1;
    if (this.isEmpty()) {
      this.head = this.tail;
      return;
    }
    tmp.next = this.tail;
  }

  dequeue() {
    const tmp = this.head;
    this.head = tmp.next;
    if (this.length) this.length -= 1;
    return tmp;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const queue = new Queue();

let res = "";
let hasSize = null;

rl.on("line", (c) => {
  if (c === "-1") rl.close();
  if (!hasSize) {
    hasSize = true;
    queue.setSize(Number(c));
    return;
  }
  if (c === "0") {
    queue.dequeue();
    return;
  }
  queue.enqueue(Number(c));
}).on("close", () => {
  if (!queue.length) res += "empty";
  while (queue.length) {
    res += `${queue.dequeue().data} `;
  }
  console.log(res.trim());
  process.exit();
});
