function solution(n, words) {
  const answer = [];
  const set = new Set();
  const map = new Map();
  for (let i = 1; i <= n; i++) {
    map.set(i, []);
  }

  for (let i = 0; i < words.length; i++) {
    if (set.has(words[i])) {
      return [(i % n) + 1, map.get((i % n) + 1).length + 1];
    }
    if (i !== 0 && words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      return [(i % n) + 1, map.get((i % n) + 1).length + 1];
    }
    map.get((i % n) + 1).push(words[i]);
    set.add(words[i]);
  }

  return [0, 0];
}
