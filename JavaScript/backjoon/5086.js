const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `8 16
32 4
17 5
0 0`
    .trim()
    .split("\n");
}

for (let i = 0; i < input.length; i++) {
  let A = +input[i].split(" ")[0];
  let B = +input[i].split(" ")[1];
  if (A + B === 0) {
    return;
  } else if (A % B === 0) {
    console.log("multiple");
  } else if (B % A === 0) {
    console.log("factor");
  } else {
    console.log("neither");
  }
}
