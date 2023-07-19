let points = [70, 60, 30, 40, 40, 90, 100, 85];
console.log(points.sort((a, b) => b - a));

const students = [
  { name: "John", point: 20 },
  { name: "David", point: 28 },
  { name: "Mary", point: 21 },
  { name: "Peter", point: 22 },
];

students.sort((a, b) => b.point - a.point);
console.log(students);

const names = ["John", "David", "Mary", "Peter"];

console.log(names.sort());
console.log(names.reverse());
