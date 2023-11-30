const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim();
} catch {
  input = `10`.trim();
}
let num = BigInt(input);

console.log(`${num * num * num}`);
console.log(3);
