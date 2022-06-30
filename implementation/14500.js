// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `4 10
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1`;

const [first, ...rest] = input.split("\n");
const [n, m] = first.split(" ").map(Number);
const num = rest.map((e) => e.split(" ").map(Number));
const x = [0, -1];

let max = 0;

for (let i = 0; i < n; i++) {
  const arr = [];
  for (let j = 0; j < m; j++) {
    if (j + 3 < m) {
      max = Math.max(
        max,
        num[i][j] + num[i][j + 1] + num[i][j + 2] + num[i][j + 3]
      );
    }
    if (i + 3 < n) {
      max = Math.max(
        max,
        num[i][j] + num[i + 1][j] + num[i + 2][j] + num[i + 3][j]
      );
    }
    if (i + 1 < n && j + 1 < m) {
      max = Math.max(
        max,
        num[i][j] + num[i + 1][j] + num[i][j + 1] + num[i + 1][j + 1]
      );
    }
    if (i + 2 < n && j + 1 < m) {
      max = Math.max(
        max,
        num[i][j] + num[i + 1][j] + num[i + 2][j] + num[i][j + 1]
      );
      max = Math.max(
        max,
        num[i][j] + num[i + 1][j] + num[i + 2][j] + num[i + 1][j + 1]
      );
      max = Math.max(
        max,
        num[i][j] + num[i + 1][j] + num[i + 2][j] + num[i + 2][j + 1]
      );

      max = Math.max(
        max,
        num[i][j + 1] + num[i + 1][j + 1] + num[i + 2][j + 1] + num[i][j]
      );
      max = Math.max(
        max,
        num[i][j + 1] + num[i + 1][j + 1] + num[i + 2][j + 1] + num[i + 1][j]
      );
      max = Math.max(
        max,
        num[i][j + 1] + num[i + 1][j + 1] + num[i + 2][j + 1] + num[i + 2][j]
      );

      max = Math.max(
        max,
        num[i][j] + num[i + 1][j] + num[i + 1][j + 1] + num[i + 2][j + 1]
      );
      max = Math.max(
        max,
        num[i][j + 1] + num[i + 1][j + 1] + num[i + 1][j] + num[i + 2][j]
      );
    }
    if (i + 1 < n && j + 2 < m) {
      max = Math.max(
        max,
        num[i][j] + num[i][j + 1] + num[i][j + 2] + num[i + 1][j]
      );
      max = Math.max(
        max,
        num[i][j] + num[i][j + 1] + num[i][j + 2] + num[i + 1][j + 1]
      );
      max = Math.max(
        max,
        num[i][j] + num[i][j + 1] + num[i][j + 2] + num[i + 1][j + 2]
      );

      max = Math.max(
        max,
        num[i + 1][j] + num[i + 1][j + 1] + num[i + 1][j + 2] + num[i][j]
      );
      max = Math.max(
        max,
        num[i + 1][j] + num[i + 1][j + 1] + num[i + 1][j + 2] + num[i][j + 1]
      );
      max = Math.max(
        max,
        num[i + 1][j] + num[i + 1][j + 1] + num[i + 1][j + 2] + num[i][j + 2]
      );

      max = Math.max(
        max,
        num[i][j] + num[i][j + 1] + num[i + 1][j + 1] + num[i + 1][j + 2]
      );
      max = Math.max(
        max,
        num[i + 1][j] + num[i + 1][j + 1] + num[i][j + 1] + num[i][j + 2]
      );
    }
  }
}

console.log(max);
