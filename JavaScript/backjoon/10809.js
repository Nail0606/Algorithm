const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `baekjoon`
    .trim()
    .split("\n");
}
let answer = [];
let alpabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
for(let i = 0; i<alpabet.length; i++){
  answer.push(input[0].indexOf(alpabet[i]));
}
console.log(answer.join(" "));