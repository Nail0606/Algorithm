const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch (error) {
  input = `A`.trim().split("\n");
}

console.log(input[0].charCodeAt());
