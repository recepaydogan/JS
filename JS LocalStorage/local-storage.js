localStorage.setItem("name", "john");
localStorage.setItem("lastName", "Doe");

let personName = localStorage.getItem("name");
let personLastName = localStorage.getItem("lastName");
// localStorage.clear();
console.log("personName: " + personName, "personLastName: " + personLastName);

//

const variable = [
  { name: "John", lastName: "doe" },
  { name: "Billy", lastName: "Bill" },
  { name: "Susie", lastName: "Morgan" },
];

// from array to string
// console.log(JSON.stringify(variable));
localStorage.setItem("personInfo", JSON.stringify(variable));

// from string to array
const storedData = JSON.parse(localStorage.getItem("personInfo"));
console.log(storedData);
