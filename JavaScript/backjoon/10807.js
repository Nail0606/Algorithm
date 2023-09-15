const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let count = parseInt(input[0]);
let howMany = 0;
let arr = input[1].split(" ");
let arr2 = arr.map((n) => +n);

for (let i = 0; i < count; i++) {
  if (arr2[i] === parseInt(input[2])) {
    howMany += 1;
  }
}
console.log(howMany);
