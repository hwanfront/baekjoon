function solution(sizes) {
  var answer = 0;
  const newSizes = sizes.map((e) => (e[0] < e[1] ? [e[1], e[0]] : e));
  const width = [];
  const height = [];
  newSizes.forEach((e) => {
    width.push(e[0]);
    height.push(e[1]);
  });

  width.sort((a, b) => b - a);
  height.sort((a, b) => b - a);

  return width[0] * height[0];
}
