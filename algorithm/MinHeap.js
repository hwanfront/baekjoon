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
