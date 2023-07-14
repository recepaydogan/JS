// students.forEach(function (value, index, b) {
//   console.log(value, index, b);
// });

// const student = (person, index) => {
//   console.log(`${index} -  ${person}`);
// };

// students.forEach(student);

const myUl = document.querySelector(".list");

let students = ["a", "b", "c", "d"];

let html = ``;

students.forEach((student, studentNo) => {
  html += `<li>${student}  -   ${studentNo}</li>`;
});

myUl.innerHTML = html;
console.log(html);
