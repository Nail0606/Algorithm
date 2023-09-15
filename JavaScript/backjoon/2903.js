const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim()
} catch {
  input = `5`
    .trim()
}

let answer= (N) => (N * 2) - 1;
let start = 3;
for(let i = 1; i < +input; i++){
   start = answer(start);
}

console.log(start ** 2)
