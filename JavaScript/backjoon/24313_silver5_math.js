const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `7 8
  8
  10`
    .trim()
    .trim()
    .split("\n");
}

const [fn, fn2] = input[0].split(" ").map(Number);
const c = +input[1];
const n0 = +input[2];
if (fn2 <= (c - fn) * n0 && c - fn >= 0) {
  console.log(1);
} else {
  console.log(0);
}
