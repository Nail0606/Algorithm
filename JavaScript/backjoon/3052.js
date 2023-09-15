const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `39
40
41
42
43
44
82
83
84
85`
    .toString()
    .trim()
    .split("\n");
}
input = input.map((n) => +n);
let arr = [];
for (let i = 0; i < 10; i++) {
  if (!arr.includes(input[i] % 42)) {
    arr.push(input[i] % 42);
  }
}
console.log(arr.length);
