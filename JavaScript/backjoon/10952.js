const fs = require('fs');
let input = fs.readFileSync("step/input.txt").toString().trim().split("\n");
let i = 0;
while(1){
  if(input[i] === "0 0"){
    break;
  }
  let arr = input[i].split(" ")
  let sum = +arr[0] + +arr[1];
  console.log(sum);
  i++;
}