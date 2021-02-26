// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = '10 11 12';

const [A, B, C] = input.split(" ").map((e) => BigInt(e));

const pow = (a, b, c) => {
  if(b === 0n) {
    return 1n;
  } 
  const tmp = pow(a, b / 2n, c);

  if(b % 2n === 0n) {
    return (tmp * tmp) % c;
  }
  return (((tmp * tmp) % c) * a) % c;
}

console.log(Number(pow(A, B, C)));