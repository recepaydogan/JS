const students = [
  { name: "1", point: 40 },
  { name: "2", point: 45 },
  { name: "3", point: 65 },
  { name: "4", point: 77 },
];

const newPoints = students.map((student) => {
  if (student.point < 50) {
    student.point += 15;
    return student;
  } else {
    return student;
  }
});

console.log(newPoints);
