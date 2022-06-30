function solution(num) {
  var answer = "";
  if (num === 0) return "Even";
  return Math.abs(num) % 2 === 1 ? "Odd" : "Even";
}
