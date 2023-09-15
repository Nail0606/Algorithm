const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `pulljima`.trim().split("\n");
}
let word = input[0].length;
console.log(word);
