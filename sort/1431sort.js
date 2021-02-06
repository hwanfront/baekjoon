// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' '));
const input = ['5',
  'ABCD',
  'A',
  'A910',
  'Z321',
  '145C',
];
const N = parseInt(input.shift());
let output = '';

input.sort().sort((a,b) => {
  const aLen = a.length;
  const bLen = b.length;
  if(aLen === bLen) {
    let aSum = 0;
    let bSum = 0;
    for(let i = 0; i < aLen; i++) {
      if (!isNaN(parseInt(a[i]))) {
        aSum += parseInt(a[i])
      }
      if (!isNaN(parseInt(b[i]))) {
        bSum += parseInt(b[i])
      }
    }
    return aSum < bSum ? -1 : aSum > bSum ? 1 : 0;
  }
  return aLen < bLen ? -1 : aLen > bLen ? 1 : 0;
});

for(let i = 0; i < N; i++) {
  output += input[i] + '\n';
}
console.log(output);
