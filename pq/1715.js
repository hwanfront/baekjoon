class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLength() {
    return this.heap.length;
  }

  push(node) {
    this.heap.push(node);
    let idx = this.heap.length - 1;
    let parentIdx = Math.floor((idx - 1) / 2);
    while (idx > 0 && this.heap[parentIdx] > this.heap[idx]) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    let idx = 0;
    while (true) {
      const leftIdx = idx * 2 + 1,
        rightIdx = idx * 2 + 2;
      if (leftIdx >= this.heap.size) {
        break;
      }
      let nextIdx = idx;
      if (this.heap[nextIdx] > this.heap[leftIdx]) {
        nextIdx = leftIdx;
      }
      if (
        rightIdx < this.heap.length &&
        this.heap[nextIdx] > this.heap[rightIdx]
      ) {
        nextIdx = rightIdx;
      }
      if (nextIdx === idx) {
        break;
      }
      this.swap(idx, nextIdx);
      idx = nextIdx;
    }
    return result;
  }

  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pq = new MinHeap();

let res = 0;
let size = null;

rl.on("line", (c) => {
  if (size === null) {
    size = Number(c);
    return;
  }
  pq.push(Number(c));
  size--;
  if (size === 0) rl.close();
}).on("close", () => {
  while (pq.heap.length !== 1) {
    const a = pq.pop();
    const b = pq.pop();
    const sum = a + b;
    res += sum;
    pq.push(sum);
  }

  console.log(res);
  process.exit();
});
