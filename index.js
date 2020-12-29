console.log(global)

setTimeout(() => {
  console.log("in timeout");
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("in set Interval");
}, 1000);

console.log(__dirname);
console.log(__filename);

// -----------------------
// Modules and require

const { ages, people } = require("./people");
ages.forEach((age) => {
  console.log(age);
});
people.forEach((p) => {
  console.log(p);
});

// OS
const os = require("os");

