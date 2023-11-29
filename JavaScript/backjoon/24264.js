const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim();
} catch {
  input = `7`.trim();
}
console.log((+input) ** 2);
console.log(2);
