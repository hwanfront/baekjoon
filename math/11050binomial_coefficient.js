// const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const input = "10 3";

const [N, K] = input.split(" ").map((e) => Number(e));

if(K > N) { 
    console.log(0)
} else {
    let num1 = 1;
    let num2 = 1;
    for(let i = 1; i <= N; i++) {
        num1 *= i;
    }
    for(let i = 1; i <= K; i++) {
        num2 *= i;
    }
    for(let i = 1; i <= N-K; i++) {
        num2 *= i;
    }
    console.log(num1 / num2);
}