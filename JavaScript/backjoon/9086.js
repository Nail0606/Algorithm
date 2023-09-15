const fs = require('fs');
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch (error) {
  input = 
`3
ACDKJFOWIEGHE
O
AB`.trim().split("\n");
}

for(let i = 0; i< input.length -1; i++){
  console.log(input[i + 1].slice(0,1)+input[i + 1].slice(-1));
}