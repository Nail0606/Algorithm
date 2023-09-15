const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let count = input[0];
for (let i = 1; i <= count; i++) {
  let testCase = input[i].split(" ");
  //parseInt(input[i].split(" "))을 해버리면 배열 자체가 number로 바뀌면서 값이 날라간다.
  let sum = +testCase[0] + +testCase[1];
  console.log(`Case #${i}: ${sum}`);
}
