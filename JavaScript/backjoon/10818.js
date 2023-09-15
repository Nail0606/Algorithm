const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let numbers = input[1].split(" ").map((n) => +n);
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log(`${min} ${max}`);
