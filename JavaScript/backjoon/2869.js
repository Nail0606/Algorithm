const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
} catch {
  input = `100 99 1000000000`.trim().split(" ");
}

let up = +input[0];
let down = +input[1];
let height = +input[2];

height -= up;

console.log(Math.ceil(height / (up - down)) + 1);
