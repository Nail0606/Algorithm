const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `3 23 85 34 17 74 25 52 65
10 7 39 42 88 52 14 72 63
87 42 18 78 53 45 18 84 53
34 28 64 85 12 16 75 36 55
21 77 45 35 28 75 90 76 1
25 87 65 15 28 11 37 28 74
65 27 75 41 7 89 78 64 39
47 47 70 45 23 65 3 41 44
87 13 82 38 31 12 29 29 80`
    .trim()
    .split("\n");
}

let array = Array.from(Array(9), () => Array(9).fill(0));
let maxArray = [];

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    array[i][j] = Number(input[i].split(" ")[j]);
  }
  maxArray.push(Math.max(...array[i]));
}
let maxNum = Math.max(...maxArray);
console.log(maxNum);
for (let i = 0; i < 9; i++) {
  if (array[i].indexOf(maxNum) !== -1) {
    console.log(i + 1, array[i].indexOf(maxNum) + 1);
  }
}
