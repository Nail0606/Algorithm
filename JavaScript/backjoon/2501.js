const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
} catch {
  input = `25 4`.trim().split(" ");
}

let N = +input[0];
let K = +input[1];
let count = 0;
let flag = 0;

for (let i = 1; i <= N; i++) {
  if (N % i === 0) {
    count++;
    if (count === K) {
      console.log(i);
      return;
    }
  }
}

if (flag === 0) {
  console.log(0);
}
