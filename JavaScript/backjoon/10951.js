const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let i = 0;
while (input[i]) {
  let num = input[i].split(" ");
  let sum = +num[0] + +num[1];
  console.log(sum);
  i++;
}
