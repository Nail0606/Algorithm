const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let count = input[0];
let arr = [];
for (let i = 1; i <= count; i++) {
  let testCase = input[i].split(" ");
  //parseInt(input[i].split(" "))을 해버리면 배열 자체가 number로 바뀌면서 값이 날라간다.
  let sum = +testCase[0] + +testCase[1];
  arr[i - 1] = sum;
}
let total = arr.join("\n");
console.log(total);
