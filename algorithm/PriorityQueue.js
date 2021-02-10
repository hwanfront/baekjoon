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
    }

    dequeue() {
        const tmp = this.head;
        this.head = tmp.next;
        return tmp;
    }
}

class PriorityQueue extends Queue {
    enqueue(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            if (data < this.head.data) {
                newNode.next = this.head;
                this.head = newNode;
                return;
            }
            let node = this.head;
            while (node.next) {
                if (node.data < data && data < node.next.data) {
                    newNode.next = node.next;
                    break;
                }
                node = node.next;
            }
            node.next = newNode;
        };
    }
}
