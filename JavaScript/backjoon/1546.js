const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `3
10 20 30`
    .trim()
    .split("\n");
}
let scoreArray = [];

scoreArray = input[1].split(" ");
scoreArray.map((n) => +n);
let highScore = Math.max(...scoreArray);
let fakeScoreArray = scoreArray.map((n) => (n / highScore) * 100);
let answer = 0;

for (let i = 0; i < fakeScoreArray.length; i++) {
  answer += fakeScoreArray[i];
}
answer /= fakeScoreArray.length;
answer = Math.round(answer * 100) / 100;
console.log(answer);
