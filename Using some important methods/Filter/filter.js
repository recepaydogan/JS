/*let points = [70, 60, 30, 40, 40, 90, 100, 85];

const studentsPassed = points.filter((point) => {
  return point >= 60;
});
console.log(studentsPassed);
*/
const students = [
  { name: "recep", passed: true },
  { name: "özge", passed: true },
  { name: "mehmet", passed: false },
  { name: "ahmet", passed: false },
];

const studentsPassed = students.filter((student) => !student.passed);
console.log(studentsPassed);
