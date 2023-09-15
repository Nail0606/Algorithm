const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("");
} catch {
  input = `baekjoon`.trim().split("");
}

console.log(+(input.join("") === input.reverse().join("")));
