class MinHeap {
  constructor() {
    this.node = [];
  }

  insert(value) {
    this.node.push(value);
    this.bubbleUp();
  }

  bubbleUp(index = this.node.length - 1) {
    if (index < 1) return;

    const currentNode = this.node[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.node[parentIndex];
    if (parentNode.cost <= currentNode.cost) return;

    this.node[index] = parentNode;
    this.node[parentIndex] = currentNode;
    index = parentIndex;
    this.bubbleUp(index);
  }

  extract() {
    const min = this.node[0];
    if (this.node.length === 1) {
      this.node.pop();
      return min;
    }
    this.node[0] = this.node.pop();
    this.trickleDown();
    return min;
  }

  trickleDown(index = 0) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    const length = this.node.length;
    let minimum = index;

    if (!this.node[rightChildIndex] && !this.node[leftChildIndex]) return;
    if (!this.node[rightChildIndex]) {
      if (this.node[leftChildIndex].cost < this.node[minimum].cost) {
        minimum = leftChildIndex;
      }
      return;
    }

    if (this.node[leftChildIndex].cost > this.node[rightChildIndex].cost) {
      if (
        rightChildIndex <= length &&
        this.node[rightChildIndex].cost < this.node[minimum].cost
      ) {
        minimum = rightChildIndex;
      }
    } else {
      if (
        leftChildIndex <= length &&
        this.node[leftChildIndex].cost < this.node[minimum].cost
      ) {
        minimum = leftChildIndex;
      }
    }

    if (minimum !== index) {
      let t = this.node[minimum];
      this.node[minimum] = this.node[index];
      this.node[index] = t;
      this.trickleDown(minimum);
    }
  }
}

// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `4 3 2 1
1 2
1 3
1 4`;

console.log(solution(input));

function solution(input) {
  const [first, ...rest] = input.split("\n");
  const [n, m, k, x] = first.split(" ").map((e) => Number(e));
  const abs = rest.reduce((pre, cur) => {
    const [a, b] = cur.split(" ").map((el) => Number(el));
    if (pre[a] === undefined) pre[a] = [];
    pre[a].push({ vertex: b, cost: 1 });
    return pre;
  }, []);

  const d = new Array(n + 1).fill(Infinity);
  let res = "";

  const dijkstra = (start) => {
    d[0] = -1;
    d[start] = 0;
    const heap = new MinHeap();
    heap.insert({ vertex: start, cost: 0 });
    while (heap.node.length) {
      const selected = heap.extract();
      const cur = selected.vertex;
      const distance = selected.cost;
      if (abs[cur] === undefined) continue;
      if (d[cur] < distance) continue;
      abs[cur].forEach((e) => {
        const { vertex, cost } = e;
        const nextDistance = distance + cost;
        if (nextDistance < d[vertex]) {
          d[vertex] = nextDistance;
          heap.insert({ vertex, cost: nextDistance });
        }
      });
    }
  };

  dijkstra(x);

  d.forEach((e, idx) => {
    if (e === k) {
      res += `${idx}\n`;
    }
  });

  return res === "" ? -1 : res.trim();
}
