const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `AABCDD
afzz
09121
a8EWg6
P5h3kx`
    .trim()
    .split("\n");
}

//값을 기본적으로 *로 출력하고 하는 방식?
let array = Array.from(Array(5), () => Array(15).fill("*"));
let str = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < input[i].length; j++) {
    array[i][j] = input[i].split("")[j];
  }
}

for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 5; j++) {
    if (array[j][i] !== "*") {
      str += array[j][i];
    }
  }
}

console.log(str);
