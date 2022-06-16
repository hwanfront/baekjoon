// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
// const input = `2 4
// CAAB
// ADCB`; // 3

// const input = `3 6
// HFDFFB
// AJHGDH
// DGAGEH`; // 6

const input = `5 5
IEFCJ
FHFKC
FFALF
HFGCF
HMCHH`; // 10

console.log(solution(input));

function solution(input) {
  const [first, ...rest] = input.split("\n");
  const [r, c] = first.split(" ").map((e) => Number(e));
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  let res = 0;
  const check = new Array(26).fill(false);

  const dfs = (x, y, cnt) => {
    res = Math.max(res, cnt);
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (0 <= nx && nx < r && 0 <= ny && ny < c) {
        const codeIdx = rest[nx][ny].charCodeAt() - 65;
        if (!check[codeIdx]) {
          check[codeIdx] = true;
          dfs(nx, ny, cnt + 1);
          check[codeIdx] = false;
        }
      }
    }
  };

  check[rest[0][0].charCodeAt() - 65] = true;
  dfs(0, 0, 1);
  return res;
}
