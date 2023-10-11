const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `10
0 1 2 3 4 5 6 7 8 9`
    .trim()
    .split("\n");
}
let count = 0;
let num = input[1].split(" ").map(Number);
let num3 = num.filter((n) => {
  return (n % 2 !== 0 && n > 1) || n === 2;
});

for (let i = 0; i < num3.length; i++) {
  let flag = 1;
  for (let j = 2; j <= Math.sqrt(num3[i]); j++) {
    if (num3[i] % j === 0) {
      flag = 0;
      break;
    }
  }
  if (flag === 1) {
    count++;
  }
}
console.log(count);
