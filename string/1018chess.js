const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let isInput = false;
let row = null;
let col = null;
let myBoard = [];
const wb = [
  ["W","B","W","B","W","B","W","B"],
  ["B","W","B","W","B","W","B","W"],
  ["W","B","W","B","W","B","W","B"],
  ["B","W","B","W","B","W","B","W"],
  ["W","B","W","B","W","B","W","B"],
  ["B","W","B","W","B","W","B","W"],
  ["W","B","W","B","W","B","W","B"],
  ["B","W","B","W","B","W","B","W"]
];
const bw = [
  ["B","W","B","W","B","W","B","W"],
  ["W","B","W","B","W","B","W","B"],
  ["B","W","B","W","B","W","B","W"],
  ["W","B","W","B","W","B","W","B"],
  ["B","W","B","W","B","W","B","W"],
  ["W","B","W","B","W","B","W","B"],
  ["B","W","B","W","B","W","B","W"],
  ["W","B","W","B","W","B","W","B"]
];
let res = 32;

rl.on("line", function(c) {
  if (!isInput) {
    count = parseInt(c);
    const input = c.split(' ').map((e) => parseInt(e));
    cnt = input[0];
    row = input[0];
    col = input[1];
    isInput = !isInput;
  } else {
    cnt--;
    myBoard.push(c.split(''));
    if (cnt == 0) {
      for (let i = 0; i < row-7; i++) {
        for (let j = 0; j < col-7; j++) {
          let wbs = resWb(i,j);
          let bws = resBw(i,j);
          let resMin = null;
          if (wbs < bws) {
            resMin = wbs;
          } else {
            resMin = bws;
          }
          if(resMin < res) {
            res = resMin;
          }
        }
      }
      console.log(res);
      rl.close();
    }
  }
}).on("close", function() {
  process.exit();
});

function resWb (row, col) {
  let cnt = 0;
  for (let i = row; i < row + 8; i++) {
    for (let j = col; j < col + 8; j++) {
      if (myBoard[i][j] != wb[i-row][j-col]) {
        cnt++;
      }
    }
  }
  return cnt;
};

function resBw (row, col) {
  let cnt = 0;
  for (let i = row; i < row + 8; i++) {
    for (let j = col; j < col + 8; j++) {
      if (myBoard[i][j] != bw[i-row][j-col]) {
        cnt++;
      }
    }
  }
  return cnt;
}
