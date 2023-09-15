const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
} catch {
  input = ``.trim().split(" ");
}
if (input[0] === "") {
  console.log(0);
} else {
  console.log(input.length);
}
