let points = [70, 60, 30, 40, 40, 90, 100, 85];

const score = points.find((point) => {
  return point > 70;
});
console.log(score);
