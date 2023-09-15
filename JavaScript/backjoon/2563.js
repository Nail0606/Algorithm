const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `3
3 7
15 7
5 2`
    .trim()
    .split("\n");
}

let array = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;
for(let i = 0; i < Number(input[0]); i++){
  for(let j = Number(input[i + 1].split(" ")[0]); j < Number(input[i + 1].split(" ")[0]) + 10; j++){
    for(let k = Number(input[i + 1].split(" ")[1]); k < Number(input[i + 1].split(" ")[1]) + 10; k++){
      if(array[j][k] !== "*"){
        array[j][k] = "*"
        count++;
      }
    }
  }
}
console.log(count)
