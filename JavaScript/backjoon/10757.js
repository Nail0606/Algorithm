const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
} catch (error) {
  input = `9223372036854775807 9223372036854775808`.trim().split(" ");
}

console.log((BigInt(input[0]) + BigInt(input[1])).toString());
