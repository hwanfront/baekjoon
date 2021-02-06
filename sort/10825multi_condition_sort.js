// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(e => e.split(' '));
const input = ['12', 
'Junkyu 50 60 100',
'Sangkeun 80 60 50',
'Sunyoung 80 70 100',
'Soong 50 60 90',
'Haebin 50 60 100',
'Kangsoo 60 80 100',
'Donghyuk 80 60 100',
'Sei 70 70 70',
'Wonseob 70 70 90',
'Sanghyun 70 70 80',
'nsj 80 80 80',
'Taewhan 50 60 90'
].map(e => e.split(' '));
const N = parseInt(input.shift());
let output = '';

input.sort((a,b) => {
  const aName = a[0];
  const bName = b[0];
  const aKor = parseInt(a[1]);
  const bKor = parseInt(b[1]);
  const aEng = parseInt(a[2]);
  const bEng = parseInt(b[2]);
  const aMath = parseInt(a[3]);
  const bMath = parseInt(b[3]);
  if(aKor === bKor) {
    if (aEng === bEng) { 
      if (aMath === bMath) {
        return aName < bName ? -1 : aName > bName ? 1 : 0;
      }
      return bMath - aMath;
    }
    return aEng - bEng;
  }
  return bKor - aKor;
});

for(let i = 0; i < N; i++) {
  output += input[i][0] + '\n';
}
console.log(output);

