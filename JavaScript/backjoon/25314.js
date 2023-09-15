const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = +input;
let arr = [];
for (let i = 0; i < parseInt(input / 4); i++) {
  arr.push("long");
}
let arr2 = arr.join(" ");
console.log(`${arr2} int`);
