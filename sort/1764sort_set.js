// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['3 4',
'ohhenrie',
'charlie',
'baesangwook',
'obama',
'baesangwook',
'ohhenrie',
'clinton'
];

const first = input.shift().split(' ');
const N = parseInt(first[0]);
const M = parseInt(first[1]);
const listen = new Set(input.splice(0,N).sort());
const see = new Set(input.sort());
let num = 0;
let output = '';

for (const el of listen) {
  if(see.has(el)) {
    num++;
    output += el + '\n';
  }
}

output = num + '\n' + output;
console.log(output);

