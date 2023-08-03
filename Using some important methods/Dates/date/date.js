const now = new Date();
// console.log(now);
// console.log(typeof now);

// console.log(now.getFullYear());
// console.log(now.getMonth() + 1);
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());

// console.log("timestamp:", now.getTime());
// console.log(now.toDateString());
// console.log(now.toTimeString());

//

const date = new Date("08/15/2019 13:42:00");

console.log(date);
const diff = now.getTime() - date.getTime();

const newDiff = Math.round(diff / 1000 / 60 / 60 / 24 / 365);

console.log(`Started making videos ${newDiff} years ago`);
