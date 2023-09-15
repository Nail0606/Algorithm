const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim();
} catch {
  input = `5`
    .trim();
}

let count = 2 * +input -1;
let star = "*";
let blank = " ";
let arr = [];

for(let i=1; i <= +input; i++){
  arr.push(" ".repeat(+input - i) + star.repeat(2 * i - 1));
}

for(let j= 1; j < +input; j++){
  arr.push(" ".repeat(j) + star.repeat((+input - j) * 2 - 1));
}

console.log(arr.join("\n"));