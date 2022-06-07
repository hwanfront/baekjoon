// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `7 7
1011111
1000001
1000001
1000001
1000001
1000001
1111111`

solution(input);

function solution (input) {
  const [first, ...rest] = input.split('\n');
  const [n, m] = first.split(' ').map(e => +e);
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const visited = [];

  for(let i = 0; i < n; i++) {
    visited.push(new Array(m).fill(0));
  }

  
  const bfs = (x, y) => {
    visited[x][y] = 1;
    const arr = [];
    arr.push([x, y]);

    while(arr.length) {
      const first = arr.shift();
      const x = first[0];
      const y = first[1];

      for(let i = 0; i < 4; i++) {
        const xx = x + dx[i];
        const yy = y + dy[i];

        if(0 <= xx && xx < n && 0 <= yy && yy < m) {
          if(rest[xx][yy] === '1' && visited[xx][yy] === 0) {
            visited[xx][yy] = visited[x][y] + 1;
            arr.push([xx, yy]);
          }
        }
      }
    }
  }
  bfs(0, 0);

  console.log(visited[n - 1][m - 1]);
}
