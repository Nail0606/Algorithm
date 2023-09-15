const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input = input.map(n => +n);
let maxNum = Math.max(...input);
let maxNumWhere = input.indexOf(maxNum);
console.log(maxNum);
console.log(maxNumWhere + 1);