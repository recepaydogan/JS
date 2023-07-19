// let points = [70, 60, 30, 40, 40, 90, 100, 85];

// const result = points.reduce((value, point) => {
//   if (point > 50) {
//     value++;
//   }
//   return value;
// }, 0);

// console.log(result);

const students = [
  { name: "John", point: 20 },
  { name: "John", point: 20 },
  { name: "Mary", point: 21 },
  { name: "Peter", point: 22 },
];

const totalScore = students.reduce((value, student) => {
  if (student.name == "John") {
    value = value + student.point;
  }
  return value;
}, 0);

console.log(totalScore);
