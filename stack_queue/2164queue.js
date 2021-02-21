// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isEmpty() {
        return !this.head;
    }

    enqueue(data) {
        const tmp = this.tail;
        this.tail = new Node(data);
        if (this.isEmpty()) {
            this.head = this.tail;
        } else {
            tmp.next = this.tail
        };
        this.length++;
    }

    dequeue() {
        const tmp = this.head;
        this.head = tmp.next;
        this.length--;
        return tmp;
    }
}

const input = '500000';
const N = Number(input);
const queue = new Queue(N);


for(let i = 0; i < N; i++) {
    queue.enqueue(i+1);
}

while(queue.length !== 1) {
    queue.dequeue();
    queue.enqueue(queue.dequeue().data);
}

console.log(queue.head.data);