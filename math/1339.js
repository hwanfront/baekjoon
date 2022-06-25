// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const input = `2
AAA
AAA`;

const [first, ...rest] = input.split("\n");
const n = Number(first);
const map = new Map();

rest.forEach((e) => {
  const cards = e.split("").reverse();
  for (let i = 0; i < cards.length; i++) {
    if (map.get(cards[i])) {
      map.set(cards[i], map.get(cards[i]) + 10 ** i);
    } else {
      map.set(cards[i], 10 ** i);
    }
  }
});

let cnt = 9;

const res = [...map.values()]
  .sort((a, b) => b - a)
  .map((e) => e * cnt--)
  .reduce((acc, cur) => acc + cur, 0);

console.log(res);
