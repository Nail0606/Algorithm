const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  const longest = Math.max(a, b, c);
  if (a + b + c - longest <= longest) {
    console.log("Invalid");
    continue;
  }
  if (a === b) {
    if (a === c) {
      console.log("Equilateral");
    } else console.log("Isosceles");
  } else {
    if (b === c || a === c) {
      console.log("Isosceles");
    } else {
      console.log("Scalene");
    }
  }
}
