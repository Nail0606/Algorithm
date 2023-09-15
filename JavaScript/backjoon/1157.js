const fs = require("fs");
let input;
try {
  input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .toLowerCase()
    .split("");
} catch {
  input = `Mississsipi`.trim().toLowerCase().split("");
}

let dict = [];
let answer = [];
for (let i = 0; i < input.length; i++) {
  dict[input[i]] = 0;
}

for (let i = 0; i < input.length; i++) {
  if (Object.keys(dict).includes(input[i])) {
    dict[input[i]] += 1;
  }
}

let arr = Object.values(dict);
let max = Math.max(...arr);
let count = Object.values(dict).filter((n) => n === max).length;
let count2 = Object.values(dict).indexOf(max);
if (count === 1) {
  console.log(Object.keys(dict)[count2].toUpperCase());
} else {
  console.log("?");
}
