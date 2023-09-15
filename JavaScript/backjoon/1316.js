const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `1
aaa`
    .trim()
    .split("\n");
}

let count = Number(input[0]);
let groupWordCount = 0;

for (let i = 1; i <= count; i++) {
  let targetSentense = input[i];
  let isGroupWord = true;
  let array = [];

  for (let j = 0; j < targetSentense.length; j++) {
    if (array.indexOf(targetSentense[j]) === -1) {
      array.push(targetSentense[j]);
    } else {
      if (array.indexOf(targetSentense[j]) !== array.length - 1) {
        isGroupWord = false;
        break;
      }
    }
  }
  if (isGroupWord === true) {
    groupWordCount++;
  }
}
console.log(groupWordCount);
