const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `5
54321`
    .trim()
    .split("\n");
}

let sum = 0;
let answer = input[1].split("").map((n) => +n);
for (let i = 0; i < +input[0]; i++) {
  sum += answer[i];
}
console.log(sum);
