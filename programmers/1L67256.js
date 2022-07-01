function solution(numbers, hand) {
  const leftOnlyNum = [1, 4, 7];
  const rightOnlyNum = [3, 6, 9];
  const keypad = [
    [3, 1],
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
    [3, 0],
    [3, 2],
  ];
  let left = 10;
  let right = 11;
  let answer = "";

  const getDistance = ([ax, ay], [bx, by]) =>
    Math.abs(ax - bx) + Math.abs(ay - by);
  const setLeft = (num) => {
    answer += "L";
    left = num;
  };

  const setRight = (num) => {
    answer += "R";
    right = num;
  };

  numbers.forEach((e) => {
    if (leftOnlyNum.includes(e)) {
      setLeft(e);
      return;
    }
    if (rightOnlyNum.includes(e)) {
      setRight(e);
      return;
    }
    const leftPos = keypad[left];
    const rightPos = keypad[right];
    const targetPos = keypad[e];
    const leftToTarget = getDistance(leftPos, targetPos);
    const rightToTarget = getDistance(rightPos, targetPos);

    if (leftToTarget === rightToTarget) {
      if (hand === "left") setLeft(e);
      else setRight(e);
      return;
    }

    if (leftToTarget < rightToTarget) setLeft(e);
    else setRight(e);
  });

  return answer;
}
