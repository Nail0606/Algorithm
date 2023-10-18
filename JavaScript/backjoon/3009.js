const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch (error) {
  input = `30 20
10 10
10 20`
    .trim()
    .split("\n");
}

let [a1, a2] = input[0].split(" ").map(Number);
let [b1, b2] = input[1].split(" ").map(Number);
let [c1, c2] = input[2].split(" ").map(Number);
let x, y;

if (a1 === b1) {
  x = c1;
  if (c2 === a2) {
    y = b2;
  } else {
    y = a2;
  }
} else if (b1 === c1) {
  x = a1;
  if (a2 === b2) {
    y = c2;
  } else {
    y = b2;
  }
} else if (c1 === a1) {
  x = b1;
  if (b2 === a2) {
    y = c2;
  } else {
    y = a2;
  }
}

console.log(x, y);
