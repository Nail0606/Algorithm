const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
let total = 0;
for(let i=1; i<=input; i++){
  total += i;
}
console.log(total);

