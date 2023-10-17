const fs = require("fs");
let input;
try {
  input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(" ")
    .map(Number);
} catch (error) {
  input = `161 181 762 375`.trim().split(" ").map(Number);
}

let x = input[0];
let y = input[1];
let w = input[2];
let h = input[3];

console.log(Math.min(w - x, h - y, x, y));
