let points = [70, 60, 30, 40, 40, 90, 100, 85];
const arrayIndex = points.findIndex((point) => {
  return point == 90;
});
points[arrayIndex] = 12;
const students = [
  { name: "John", point: 20 },
  { name: "David", point: 28 },
  { name: "Mary", point: 21 },
  { name: "Peter", point: 22 },
];

const objectIndex = students.findIndex((student) => student.name == "Peter");
students[objectIndex].name = "Bill";
students[objectIndex].point = points[arrayIndex];
console.log(points);
console.log(students);
