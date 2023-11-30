const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim();
} catch {
  input = `7`.trim();
}

function getFactorial(number) {
  let factorialSum = 0;
  for (let i = 1; i < number; i++) {
    factorialSum += i;
  }
  return factorialSum;
}

console.log(getFactorial(input));
console.log(2);
