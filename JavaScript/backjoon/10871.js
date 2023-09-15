const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let N = parseInt(input[0].split(" ")[0]);
let X = parseInt(input[0].split(" ")[1]);
let numbers = (input[1].split(" ").map(n => +n));
let arr = numbers.filter(n => n < X)
console.log(arr.join(" "));


