// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['5',
  '4 1 5 2 3',
  '5',
  '1 3 7 9 5'
];
const N = parseInt(input[0]);
const M = parseInt(input[2]);
const fst = new Set(input[1].split(' ').sort());
const sec = input[3].split(' ');
let num = 0;
let output = '';

for (const el of sec) {
  if(fst.has(el)) {
    output += '1\n';
  }
  else {
    output += '0\n'
  }
}
console.log(output);

