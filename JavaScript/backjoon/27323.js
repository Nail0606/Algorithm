const fs = require("fs");
let input;
try {
  input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
} catch (error) {
  input = `2
  3`
    .trim()
    .split("\n")
    .map(Number);
}

console.log(input[0] * input[1]);
