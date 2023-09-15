const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let count = input[0];
for (let i = 1; i <= count; i++) {
  let testCase = input[i].split(" ");
  let sum = +testCase[0] + +testCase[1];
  console.log(`Case #${i}: ${testCase[0]} + ${testCase[1]} = ${sum}`);
}
