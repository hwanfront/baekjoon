class PriorityQueue {
    constructor(dist) {
        this.queue = [];
        this.dist = dist;
    }

    enqueue(nodeIdx) {
        this.queue.push(nodeIdx)
    }

    dequeue() {
        let entry = 0;
        let entryIdx = this.queue[entry];

        this.queue.forEach((nodeIdx, idx) => {
            if (this.dist[entryIdx] > this.dist[nodeIdx]) {
                entryIdx = nodeIdx;
                entry = idx;
            }
        });

        return this.queue.splice(entry, 1);
    }
}

const graph = new Array().fill(null).map(() => new Array());
