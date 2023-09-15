const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
} catch {
  input = `734 893`.trim().split(" ");
}

let numA = input[0].split("");
let numB = input[1].split("");
numA = numA.reverse();
numB = numB.reverse();

numA = +numA.join("");
numB = +numB.join("");

let answer = [];
answer.push(numA);
answer.push(numB);

console.log(Math.max(...answer));
