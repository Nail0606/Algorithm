const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let N = parseInt(input[0].split(" ")[0]);
let M = parseInt(input[0].split(" ")[1]);
let startNum = 0;
let endNum = 0;
let ballNum = 0;
let basket = [];
for (let i = 0; i < N; i++) {
  basket[i] = 0;
}

for (let i = 0; i < M; i++) {
  startNum = parseInt(input[i + 1].split(" ")[0]);
  endNum = parseInt(input[i + 1].split(" ")[1]);
  ballNum = parseInt(input[i + 1].split(" ")[2]);
  for (startNum; startNum <= endNum; startNum++) {
    basket[startNum - 1] = ballNum;
  }
}
let answer = basket.join(" ");
console.log(answer);
