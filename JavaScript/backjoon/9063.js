const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch (error) {
  input = `1
15 13
`
    .trim()
    .split("\n");
}

const count = +input[0];
const xArray = [];
const yArray = [];

for (let i = 1; i <= count; i++) {
  let xAndY = input[i].split(" ");
  xArray.push(+xAndY[0]);
  yArray.push(+xAndY[1]);
}
const xValue = Math.max(...xArray) - Math.min(...xArray);
const yValue = Math.max(...yArray) - Math.min(...yArray);

console.log(xValue * yValue);
