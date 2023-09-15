const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
let [a,b] = input.map(n => +n);
if( a > b){
  console.log(">");
}
else if(a < b){
  console.log("<");
}
else{
  console.log("==")
}
