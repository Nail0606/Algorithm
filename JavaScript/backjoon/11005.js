const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
} catch {
  input = `9 36`.trim().split(" ");
}
let N = +input[0];
let B = +input[1];
let C = 0;
let cnt = 0;
let array = [];
let array2 = [];
while (N !== 0) {
  M = parseInt(N / B);
  C = parseInt(N % B);
  cnt++;
  N = parseInt(N / B);
  array.push(C);
}

for (let i = cnt; i > 0; i--) {
  if (array[i - 1] > 9) {
    array2.push(String.fromCharCode(array[i - 1] + 55));
  } else {
    array2.push(array[i - 1]);
  }
}
console.log(array2.join(""));
