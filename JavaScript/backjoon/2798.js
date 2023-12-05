let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = +input[0].split(" ")[0];
const M = +input[0].split(" ")[1];
const CARDS = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let max = 0;
for (let i = 0; i < N; i++) {
  const A = CARDS[i];
  for (let j = i + 1; j < N; j++) {
    const B = CARDS[j];
    for (let k = j + 1; k < N; k++) {
      const C = CARDS[k];
      if (A + B + C <= M && A + B + C > max) {
        max = A + B + C;
      }
    }
  }
}
console.log(max);
