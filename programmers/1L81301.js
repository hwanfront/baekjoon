function solution(s) {
  var answer = "";
  const number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let res = s;

  number.forEach((e, i) => {
    while (res.includes(e)) {
      res = res.replace(e, i);
    }
  });

  return Number(res);
}
