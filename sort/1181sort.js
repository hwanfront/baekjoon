// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['13',
  'but',
  'i',
  'wont',
  'hesitate',
  'no',
  'more',
  'no',
  'more',
  'it',
  'cannot',
  'wait',
  'im',
  'yours'
];
const removeDuplicate = input.filter((item, index) => input.indexOf(item) === index);
const N = removeDuplicate.shift();
const NLen = removeDuplicate.length;
let output = '';

removeDuplicate.sort().sort((a,b) => {
  const aLen = a.length;
  const bLen = b.length;

  if(aLen === bLen) {
    let aSum = 0;
    let bSum = 0;

    for(let i = 0; i < aLen; i++) {
      if (!isNaN(parseInt(a[i]))) {
        aSum += parseInt(a[i]);
      }
      if (!isNaN(parseInt(b[i]))) {
        bSum += parseInt(b[i]);
      }
    }

    return aSum < bSum ? -1 : aSum > bSum ? 1 : 0;
  }
  
  return aLen < bLen ? -1 : aLen > bLen ? 1 : 0;
});

for(let i = 0; i < NLen; i++) {
  output += removeDuplicate[i] + '\n';
}
console.log(output);

