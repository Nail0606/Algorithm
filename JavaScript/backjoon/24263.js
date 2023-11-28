const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim();
} catch {
  input = `21`.trim();
}
console.log(input);
console.log(1);
