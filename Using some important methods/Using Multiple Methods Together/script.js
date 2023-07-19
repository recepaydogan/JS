const people = [
  { name: "John", point: 60 },
  { name: "Mary", point: 56 },
  { name: "Peter", point: 88 },
  { name: "Lisa", point: 30 },
  { name: "Sarah", point: 65 },
  { name: "Nancy", point: 45 },
  { name: "Karen", point: 50 },
  { name: "Rachel", point: 100 },
];
const extraPoint = 15;

// const filteredPoints = people.filter((person) => person.point < 50);

// const newPoints = filteredPoints.map((person) => {
//   return `${person.name}'s score without added points is ${
//     person.point
//   } and the new score with extra point is ${person.point + extraPoint}`;
// });

const newScores = people
  .filter((person) => person.point < 50)
  .map(
    (person) =>
      `${person.name}'s score without added points is ${
        person.point
      } and the new score with extra point is ${person.point + extraPoint}`
  );
console.log(newScores);
// console.log(newPoints);
