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
const input = `5
8
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
1 5`;

console.log(solution(input));

function solution(input) {
  const [first, second, ...rest] = input.split("\n");
  const n = Number(first);
  const m = Number(second);
  const [start, end] = rest.pop().split(" ").map(Number);
  const infos = rest.map((e) => e.split(" ").map(Number));

  const d = new Array(n + 1).fill(Infinity);
  const arr = new Array(n + 1).fill(0).map(() => []);
  infos.forEach((e) => {
    arr[e[0]].push({ vertex: e[1], cost: e[2] });
  });

  const dijkstra = (start) => {
    d[0] = -1;
    d[start] = 0;
    const heap = new MinHeap();
    heap.insert({ vertex: start, cost: 0 });
    while (heap.node.length) {
      const selected = heap.extract();
      const cur = selected.vertex;
      const distance = selected.cost;
      if (!arr[cur]) continue;
      if (d[cur] < distance) continue;
      arr[cur].forEach((e) => {
        const { vertex, cost } = e;
        const nextDistance = distance + cost;
        if (nextDistance < d[vertex]) {
          d[vertex] = nextDistance;
          heap.insert({ vertex, cost: nextDistance });
        }
      });
    }
  };

  dijkstra(start);

  return d[end];
}
