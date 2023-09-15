const fs = require('fs');
let input;
try{
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
}catch{
  input = `shiftpsh
6`.trim().split("\n");
}
let str = input[0].split("");
let sequence = +input[1];
console.log(str[sequence - 1]);
