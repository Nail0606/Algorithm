const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `Hello
Baekjoon
Online Judge`
    .trim()
    .split("\n");
}

console.log(input.join("\n"));