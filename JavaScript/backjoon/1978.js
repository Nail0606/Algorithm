const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `4
1 3 5 7`
    .trim()
    .split("\n");
}

let N = +input[0];
let count = 0;
for (let i = 0; i < N; i++) {
  let num = +input[1].split(" ")[i];
  let flag = 0;
  if (num > 1) {
    for (let j = 2; j <= Math.ceil(Math.sqrt(num)); j++) {
      if (num % j === 0) {
        flag = 1;
        break;
      }
    }
  } else {
    flag = 1;
  }
  if (flag === 0) {
    count++;
  }
}
console.log(count);
