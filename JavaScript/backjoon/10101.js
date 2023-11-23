const fs = require("fs");
let [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

if (a + b + c !== 180) {
  console.log("Error");
} else {
  if (a === b) {
    if (a === c) console.log("Equilateral");
    else console.log("Isosceles");
  } else {
    if (a === c || b === c) console.log("Isosceles");
    else console.log("Scalene");
  }
}
