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
      if(this.isEmpty()) { 
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
      if(this.isEmpty()) { 
          this.head = newNode; 
      } else { 
          if (data < this.head.data) {
              newNode.next = this.head;
              this.head = newNode;
              return;
          }
          let node = this.head;
          while (node.next) {
              if(node.data < data && data < node.next.data) {
                  newNode.next = node.next;
                  break;
              }
              node = node.next;
          }
          node.next = newNode;
      };
  }
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const input = ['5 5 3',
// '5 4',
// '5 2',
// '1 2',
// '3 4',
// '3 1',
// ];

// const input = ['4 5 1',
// '1 2',
// '1 3',
// '1 4',
// '2 4',
// '3 4',
// ];

// const input = ['1000 1 1000',
// '999 1000',
// ];

const [N, M, V] = input[0].split(' ').map(x => {return Number(x)});;
const graph = Array(N + 1);
const visited = Array(N + 1);
let res = [];

const dfs = (num) => {
  res.push(num);
  visited[num] = true;
  let cur = graph[num].head;
  while (cur) {
    if (!visited[cur.data]) {
      dfs(cur.data);
    }
    cur = cur.next;
  }
};

const bfs = (num) => {
  let queue = new Queue();
  queue.enqueue(num);
  visited[num] = true;
  while (!queue.isEmpty()) {
    let u = queue.dequeue().data;
    res.push(u);
    let cur = graph[u].head;
    while (cur) {
      if (!visited[cur.data]) {
        queue.enqueue(cur.data);
        visited[cur.data] = true;
      }
      cur = cur.next;
    }
  }
};

for (let i = 0; i < N + 1; i++) {
  graph[i] = new PriorityQueue();
  visited[i] = false;
}

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(' ').map(e => parseInt(e));
  graph[a].enqueue(b);
  graph[b].enqueue(a);
}

dfs(V);
for (let i = 0; i < N + 1; i++) {
  visited[i] = false;
}
console.log(res.join(' '));
res = [];
bfs(V);
console.log(res.join(' '));