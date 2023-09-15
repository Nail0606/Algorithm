const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("");
} catch {
  input = `UNUCIC`.trim().split("");
}

let arr = [
  ["A", "B", "C"],
  ["D", "E", "F"],
  ["G", "H", "I"],
  ["J", "K", "L"],
  ["M", "N", "O"],
  ["P", "Q", "R", "S"],
  ["T", "U", "V"],
  ["W", "X", "Y", "Z"],
];

let sum = 0;

for (let i = 0; i < input.length; i++) {
  let findNum = input[i];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].indexOf(findNum) !== -1) {
      sum = sum + j + 3;
    }
  }
}
console.log(sum);
