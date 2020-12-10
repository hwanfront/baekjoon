const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
let GCD = null;  // greatest common divisor 최대공약수
let LCM = null;  // least common multiple 최대공배수
let b = null;
let s = null;


rl.on("line", function(c) {
  input = c.split(' ').map((e) => parseInt(e)); // 입력2 [ ... ]
  // 동일한 두 값
  if (input[0] == input[1]) { 
    console.log(input[0])
    console.log(input[1])
    rl.close();
  }
  
  if (input[0] > input[1]) {
    b = input[0];
    s = input[1];
  } else {
    b = input[1];
    s = input[0];
  }

  // 유클리드 호제법
  GCD = gcd(input[0], input[1]);  

  let ab = b;
  let as = s;

  while ( b != s ) {
    if ( b > s ) {
      s += as;
    } else {
      b += ab;
    }
  }
  LCM = b;

  console.log(GCD);
  console.log(LCM);

  rl.close();
}).on("close", function() {
  process.exit();
});

function gcd (a, b) {
  return b ? gcd (b, a%b) : a;
}