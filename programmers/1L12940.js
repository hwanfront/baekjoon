function solution(n, m) {
  if (n === m) return [n, m];
  const minValue = Math.min(n, m);
  const maxValue = Math.max(n, m);

  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return [gcd(maxValue, minValue), lcm(maxValue, minValue)];
}
