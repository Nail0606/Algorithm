const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch (error) {
  input = `3 3
1 1 1
2 2 2
0 1 0
3 3 3
4 4 4
5 5 100`
    .trim()
    .split("\n");
}

let row = Number(input[0].split(" ")[0]);
let col = Number(input[0].split(" ")[1]);
let arr = [];
let arr2 = [];
let arr3 = [];
let answer = [];
let flag;

for (let i = 0; i < row; i++) {
  arr[i] = [];
  for (let j = 0; j < col; j++) {
    arr[i][j] = Number(input[i + 1].split(" ")[j]);
  }
}

for (let i = 0; i < row; i++) {
  arr2[i] = [];
  for (let j = 0; j < col; j++) {
    arr2[i][j] = Number(input[i + 1 + row].split(" ")[j]);
  }
}

for (let i = 0; i < row; i++) {
  arr3[i] = [];
  for (let j = 0; j < col; j++) {
    arr3[i][j] = arr[i][j] + arr2[i][j];
  }
}

for (let i = 0; i < row; i++) {
  answer[i] = [];
  for (let j = 0; j < col; j++) {
    answer[i].push(arr3[i][j]);
  }
  console.log(answer[i].join(" "));
}
