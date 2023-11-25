const fs = require("fs");
let a, b, c;
try {
  [a, b, c] = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
} catch (error) {
  [a, b, c] = `2 2 2`
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
}

if (a + b > c) {
  console.log(a + b + c);
} else {
  const adjustedLength = a + b - 1;
  console.log(a + b + adjustedLength);
}
