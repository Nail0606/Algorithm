const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim();
} catch (error) {
  input = `9`.trim();
}

input = +input;
let answer = [];

if (input === 1) {
  return;
} else {
  let count = 2;
  while (input !== 1) {
    if (input % count === 0) {
      input = input / count;
      answer.push(count);
    } else {
      count++;
    }
  }
}

console.log(answer.join("\n"));
