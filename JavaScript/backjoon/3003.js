const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
} catch (error) {
  input = `2 1 2 1 2 1`.trim().split(" ");
}

let arr = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] - input[i];
}
console.log(arr.join(" "));
