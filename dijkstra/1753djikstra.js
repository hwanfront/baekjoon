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

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const input = [
    '5 6',
    '1',
    '5 1 1',
    '1 2 2',
    '1 3 3',
    '2 3 4',
    '2 4 5',
    '3 4 6',
]

const [V, E] = input[0].split(" ").map((e) => Number(e));
const K = Number(input[1]);

const graph = new Array(V).fill(null).map(() => new Array());
for (let i = 0; i < 6; i++) {
    const [u, v, w] = input[i + 2].split(" ").map((e) => Number(e));
    graph[u - 1].push([v - 1, w]);
    // graph[v - 1].push([u - 1, w]);
}

const dist = new Array(V).fill(Infinity);
const visited = new Array(V).fill(false);
const q = new PriorityQueue(dist);
q.enqueue(K - 1);
dist[K - 1] = 0;

while (q.queue.length) {
    const cur = q.dequeue();

    if (visited[cur]) continue;

    visited[cur] = true;

    for (const [next, w] of graph[cur]) {
        if (dist[next] > dist[cur] + w) {
            dist[next] = dist[cur] + w;
            q.enqueue(next);
        }
    }
}

console.log(dist.map((e) => e === Infinity ? "INF" : e).join("\n").trim());