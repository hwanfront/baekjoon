// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = '6 2 10 3';

const [x, y, w, h] = input.split(' ').map(e => Number(e));
let resX = 0;
let resY = 0;

x < Math.abs(w - x) ? resX = x : resX = Math.abs(w - x);
y < Math.abs(h - y) ? resY = y : resY = Math.abs(h - y);
console.log(resX < resY ? resX : resY);