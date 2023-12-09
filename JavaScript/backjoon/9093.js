const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const iter = input.shift();

let ans = [];

for (let i = 0; i < iter; i++) {
  let sentence = [];

  let arr = input[i].split(" ");

  for (let j = 0; j < arr.length; j++) {
    let word = arr[j].split("").reverse().join("");

    sentence.push(word);
  }

  let newSentence = sentence.join(" ");

  ans.push(newSentence);
}

console.log(ans.join("\n"));
