const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim();
} catch (error) {
  input = `3`.trim();
}

console.log(4 * +input);
