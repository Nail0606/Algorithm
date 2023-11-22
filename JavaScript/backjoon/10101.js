const fs = require("fs");
let input;
try {
  input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
} catch (error) {
  input = `61
61
58`
    .trim()
    .split("\n")
    .map(Number);
}

printAngle(input);

function printAngle(input) {
  const angleSum = input.reduce((acc, cur) => acc + cur, 0);
  if (angleSum === 180) {
    let count = 0;
    const angleSet = [];
    for (let i = 0; i < input.length; i++) {
      if (angleSet.includes(input[i])) {
        count++;
      } else {
        angleSet.push(input[i]);
      }
    }
    if (count === 1) {
      console.log("Isosceles");
    } else if (count === 2) {
      console.log("Equilateral");
    } else {
      console.log("Scalene");
    }
    return;
  } else {
    console.log("Error");
    return;
  }
}
