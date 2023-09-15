const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `2
3 ABC
7 /HTP
6 asdf
1 dsf`
    .trim()
    .split("\n");
}

let arr = [];
let arr2;

for (let i = 0; i < input.length; i++) {
  if (input[i].split(" ")[1] !== undefined) {
    let count = +input[i].split(" ")[0];
    for (let j = 0; j < +input[i].split(" ")[1].length; j++) {
      if (input[i].split(" ")[1].split("")[j] !== undefined) {
        arr.push(input[i].split(" ")[1].split("")[j].repeat(count));
      }
    }
    arr2 = arr.join("");
    arr.push("\n");
  }
}
console.log(arr2);
