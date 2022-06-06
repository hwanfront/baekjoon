class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class PQ {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isLastChild() {
    if(!this.head) return false;
    if(!this.head.next) return true;
    return false;
  }

  isEmpty() {
    return !this.head;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if(this.isEmpty()) {
      this.head = newNode;
      return;
    }
    if(data < this.head.data) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let node = this.head;
    while(node.next) {
      if(node.data < data && data < node.next.data) {
        newNode.next = node.next;
        break;
      }
      node = node.next;
    }
    node.next = newNode;
  }

  dequeue() {
    const tmp = this.head;
    this.head = tmp.next;
    return tmp;
  }
}

// const fs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const fs = `3
10
20
40`;
const input = fs;
const [N, ...cards] = input;
const pq = new PQ();
cards.forEach(card => pq.enqueue(Number(card)));
let res = 0;
while(!pq.isLastChild()) {
  const a = pq.dequeue().data;
  const b = pq.dequeue().data;
  const sum = a + b;
  res += sum;
  pq.enqueue(sum);
}
console.log(res);